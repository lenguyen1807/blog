import { Metadata } from 'next';
import { GetAllArticles, GetAllUniqueTags } from "@/lib/api"
import { Tags } from "lucide-react";
import BlogTags from "@/components/blog/tags";

export const metadata: Metadata = {
  title: "all blogs",
  description: "I'm an enthuasiaist in AI and Mathematics",
}

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const data = await GetAllArticles();
    const tags = GetAllUniqueTags(data);

    return (
      <div className="space-y-14">
        {tags.length > 0 && (
        <div>
          <h2 className="mb-4 flex items-center text-lg font-semibold">
              <Tags className="mr-2" />
              Tags
          </h2>
          <ul className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                  <li key={tag}>
                      <BlogTags tag={tag} className="text-sm"/>
                  </li>
              ))}
          </ul>
        </div>
        )}
        <section>
          {children}
        </section>
        {/* <div className="grid gap-y-16 sm:grid-cols-[3fr_1fr] sm:gap-x-16">
          <section>
            {children}
          </section>
          {tags.length > 0 && (
              <aside>
                  <h2 className="mb-4 flex items-center text-lg font-semibold">
                      <Tags className="mr-2" />
                      Tags
                  </h2>
                  <ul className="flex flex-wrap gap-2">
                      {tags.map((tag) => (
                          <li key={tag}>
                              <BlogTags tag={tag} className="text-sm"/>
                          </li>
                      ))}
                  </ul>
              </aside>
          )}
        </div> */}
      </div>
    )
}