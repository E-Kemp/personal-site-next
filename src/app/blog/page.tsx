import Link from 'next/link'
import { Chip, TagsList } from '../../components'

const BlogPage = () => {
  const posts = [];

  return (
    <div className="prose prose-slate w-full">
      <h1 className="mt-5 mb-2">Blog</h1>
      <TagsList />
      <ul className="mt-5 list-none p-0">
        {posts
          // .filter(
          //   ({ frontmatter: post }) =>
          //     filter.length === 0 ||
          //     post?.tags?.some((pTag) => filter.some((fTag) => pTag === fTag))
          // )
          .map(({ title, slug, tags, date }) => (
            <li className="mb-5">
              <Link key={title} href={`/blog${slug}`} aria-label={title ?? ''}>
                {title}
              </Link>
              {' / '}
              {date}
              <ul className="my-0 flex w-full list-none flex-row flex-wrap justify-start p-0">
                {tags?.map((tag) => (
                  <li key={tag} className="my-1 mr-2 pl-0">
                    <Chip>{tag}</Chip>
                    {/* {tag && !!!filter.includes(tag) ? (
                      <Chip>{tag}</Chip>
                    ) : (
                      <InvertedChip>{tag}</InvertedChip>
                    )} */}
                  </li>
                ))}
              </ul>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default BlogPage
