const postImportResult = import.meta.glob('./**/*.{md,mdx}', { eager: true })
const posts = Object.values(postImportResult).filter(post => !post.frontmatter.draft)
const documents = posts.map(post => ({
  url: post.url,
  title: post.frontmatter.title,
  description: post.frontmatter.description,
  publishDate: post.frontmatter.publishDate,
}))

export async function get() {
    const body = JSON.stringify(documents)
    return {
      body
    }
  }