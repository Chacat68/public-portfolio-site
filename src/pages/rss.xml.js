import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { blogTdk, siteConfig } from "../data/content";

export async function GET(context) {
  const blog = await getCollection('blog');
  return rss({
    title: blogTdk.title || siteConfig.siteName,
    description: blogTdk.description || '',
    site: context.site,
    stylesheet: '/rss/pretty-feed-v3.xsl',
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publishDate,
      description: post.data.description,
      link: `/blog/${post.id}/`,
    })),
  });
}
