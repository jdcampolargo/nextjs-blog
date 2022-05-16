import Head from 'next/head'

// Write a blog list of posts with the following format:
// <li>
//   <Link href="/blog/[slug]">
//     <a>{title}</a>
//   </Link>
// </li>
// that changes and creates a link to every post in the blog as pages/blog updates
// and creates a new page for each post.





export default function Blog() {
  return (
    <div>
      <Head>
        <title>Blog</title>
      </Head>
      <h1>Blog</h1>
      <ul>
        <li>
          <a href="/blog/first-post">
            <a>First Post</a>
          </a>
        </li>
        <li>
          <a href="/blog/second-post">
            <a>Second Post</a>
          </a>
        </li>
      </ul>
    </div>
  )
}