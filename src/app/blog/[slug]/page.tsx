import { type MDXRemoteSerializeResult } from 'next-mdx-remote';
import { promises as fs } from 'fs';
import { serialize } from 'next-mdx-remote/serialize';
import { MdxContent } from '../../../components';
 
type Frontmatter = {
  title: string;
  date: string;
};
 
type Post<TFrontmatter> = {
  serialized: MDXRemoteSerializeResult;
  frontmatter: TFrontmatter;
};

export async function generateStaticParams() {
  const slugs: string[] = []
  await fs.readdir('../../../posts').then((files) => {
    files.forEach((file) => slugs.push(file));
  })
 
  return slugs.map((slug) => ({
    slug,
  }))
}

async function getPost(filepath: string): Promise<Post<Frontmatter>> {
  // Read the file from the filesystem
  const raw = await fs.readFile(filepath, 'utf-8');
 
  // Serialize the MDX content and parse the frontmatter
  const serialized = await serialize(raw, {
    parseFrontmatter: true,
  });
 
  // Typecast the frontmatter to the correct type
  const frontmatter = serialized.frontmatter as Frontmatter;
 
  // Return the serialized content and frontmatter
  return {
    frontmatter,
    serialized,
  };
}

export default async function Page() {
  // Get the serialized content and frontmatter
  const { serialized, frontmatter } = await getPost('content/post.mdx');
 
  return (
    <div style={{ maxWidth: 600, margin: 'auto' }}>
      <h1>{frontmatter.title}</h1>
      <p>Published {frontmatter.date}</p>
      <MdxContent source={serialized} />
    </div>
  );
}
