import { Blog_CardContainer, Blog_CardImg, Blog_CardDate, Blog_CardTextContainer, Blog_CardTitle, Blog_CardDescription, Blog_StackContainer } from "./Blog_CardStyles";
const Blog_Card = ({ blog }) => {
  return (
    <>
      <Blog_CardContainer w="100%" h="auto">
        <Blog_CardImg src="projectimage.png" />
        <Blog_CardTextContainer>
          <Blog_CardTitle color="textFocused">{blog.title}</Blog_CardTitle>
          <Blog_CardDate color="accent">{blog.postDate}</Blog_CardDate>
          <Blog_CardDescription color="text">{blog.description}</Blog_CardDescription>
        </Blog_CardTextContainer>
      </Blog_CardContainer>
    </>
  );
};

export default Blog_Card;
