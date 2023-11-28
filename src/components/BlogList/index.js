import BlogItem from '../BlogItem'
// Write your JS code here
const BlogList = props => {
  const {blogList} = props

  return (
    <ul>
      {blogList.map(each => (
        <BlogItem itemDetails={each} key={each.id} />
      ))}
    </ul>
  )
}

export default BlogList
