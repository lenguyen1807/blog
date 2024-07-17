import { entries } from "bibtex-parse"
import fs from "fs";

interface BibProps {
    key: string,
    type: string,
    AUTHOR: string,
    YEAR?: number,
    MONTH?: string,
    TITLE: string,
    JOURNAL?: string
    PUBLISHER?: string,
    BOOKTITLE?: string,
    DOI?: string,
    URL?: string
}

interface MdxBibProps {
    source: string;
}

export default function MdxBib({source} : MdxBibProps) {
    const bibtex = fs.readFileSync(`./src/references/${source}`, "utf-8");
    const value = entries(bibtex) as BibProps[];

    return (
        <div className="border-t border-[var(--footnotes-border-color)]">
            <h2>References</h2>
            <ol className="text-sm sm:text-base">
                {value.map((val, idx) => (
                    <li 
                        key={val.key} 
                        id={val.key} 
                        className="text-start"
                        aria-label={`${idx}`}
                    >
                        <div>
                            {`${val.AUTHOR}.`} {" "}
                            <span className="italic">{`${val.TITLE},`}</span> {" "}
                            {val.BOOKTITLE && 
                                <>
                                <span className="italic">
                                    {`${val.BOOKTITLE},`}
                                </span>
                                {" "}
                                </>
                            }
                            {val.JOURNAL ? `${val.JOURNAL}, ` : ""}
                            {val.PUBLISHER ? `${val.PUBLISHER}, ` : ""}
                            {val.YEAR ? `${val.YEAR}, ` : ""}
                            {val.URL ? <a href={val.URL}>{val.URL}</a> : ""} {" "}
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    )
}