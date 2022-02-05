import { useState } from "react";
import UnderConstructionArchive from "../../UnderConstruction/UnderConstructionArchive";
import {
  Blog_CardContainer,
  Blog_CardImg,
  Blog_CardDate,
  Blog_CardTextContainer,
  Blog_CardTitle,
  Blog_CardDescription
} from "./Blog_CardStyles";

const Blog_Card = ({ blog }) => {
  const [displayConstruction, setDisplayConstruction] = useState(false);

  const underConstruction = () => {
    setDisplayConstruction(!displayConstruction);
    setTimeout(() => {
      setDisplayConstruction(false);
    }, 1500);
  };
  return (
    <Blog_CardContainer w="100%" h="auto" onClick={underConstruction}>
      {displayConstruction && <UnderConstructionArchive size={"120px"} />}
      <Blog_CardImg src="Projects/project-5.png" />
      <Blog_CardTextContainer>
        <Blog_CardTitle color="textFocused">{blog.title}</Blog_CardTitle>
        <Blog_CardDate color="accent">{blog.postDate}</Blog_CardDate>
        <Blog_CardDescription color="text">{blog.description}</Blog_CardDescription>
      </Blog_CardTextContainer>
    </Blog_CardContainer>
  );
};

export default Blog_Card;
