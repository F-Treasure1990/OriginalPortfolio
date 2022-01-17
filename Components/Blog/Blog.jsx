import { Section_Divider, Section_SubTitle, Section_Title } from "../../styles/GlobalStyles";
import { Blog_CardsContainer } from "./BlogStyles";
import Blog_Card from "./Blog_Card/Blog_Card";
import blogData from "/Data/blogData.json";
const Blog = () => {
  const { blogs } = blogData;
  return (
    <>
      <Section_Title color="textFocused">blog</Section_Title>
      <Section_SubTitle color="accent">Skills & Experience with an array of softwares </Section_SubTitle>
      <Section_Divider />
      <Blog_CardsContainer>
        {blogs.map((b, i) => (
          <Blog_Card blog={b} key={`blog-${i}`} />
        ))}
      </Blog_CardsContainer>
    </>
  );
};

export default Blog;
