import { Text } from "../../styles/GlobalStyles";
import { TopNav_Button } from "./TopNavStyles";

const TopNavbar = () => {
  return (
    <TopNav_Button>
      <img className="icon" src="message.png" alt="Message Icon" />
      <Text className="messageText" color="accent" font="body2">
        message
      </Text>
    </TopNav_Button>
  );
};

export default TopNavbar;
