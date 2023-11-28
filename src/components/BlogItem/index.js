// Write your JS code here
const BlogItem = props => {
  const {itemDetails} = props
  const {title, description, publishedDate} = itemDetails
  return (
    <div>
      <h1>{title}</h1>
      <p>{publishedDate}</p>
      <p>{description}</p>
    </div>
  )
}
export default BlogItem
