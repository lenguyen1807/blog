/* ref: https://claritydev.net/blog/nextjs-blog-remark-interactive-table-of-contents */
import { toString } from "mdast-util-to-string";
import { visit } from "unist-util-visit";
import { slugify } from "../utils";

export function headingTree() {
  return (node, file) => {
    file.headings = getHeadings(node);
  };
}

function getHeadings(root) {
  const nodes = {};
  const output = [];
  const indexMap = {};
  visit(root, "heading", (node) => {
    addID(node, nodes);
    transformNode(node, output, indexMap);
  });
  return output;
}

/*
 * Add an "id" attribute to the heading elements based on their content
 */
function addID(node, nodes) {
  const id = node.children.map((c) => c.value).join("");
  nodes[id] = (nodes[id] || 0) + 1;
  node.data = node.data || {
      id: slugify(`${id}${nodes[id] > 1 ? ` ${nodes[id] - 1}` : ""}`)
  };
}

function testKey(key, indexMap) {
  // initialize index map
  if (Object.keys(indexMap).length === 0) {
    return true;
  }
  // exist a key in index map (same level or above level)
  if (indexMap[key.depth]) {
    return true;
  }
  return false;
}

function transformNode(node, output, indexMap) {
  const transformedNode = {
    value: toString(node),
    depth: node.depth,
    data: node.data,
    children: [],
  };

  if (testKey(node, indexMap)) {
    output.push(transformedNode);
    indexMap[node.depth] = transformedNode;
  } else {
    const parent = indexMap[node.depth - 1];
    if (parent) {
      parent.children.push(transformedNode);
      indexMap[node.depth] = transformedNode;
    }
  }
}
