'use client';
 
import { MDXRemote, type MDXRemoteSerializeResult } from 'next-mdx-remote';
 
type MdxContentProps = {
  source: MDXRemoteSerializeResult;
};
 
const MdxContent = ({ source }: MdxContentProps) => {
  return <MDXRemote {...source} />;
}

export { MdxContent }