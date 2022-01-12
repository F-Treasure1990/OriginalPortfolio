import { Text } from "../../styles/GlobalStyles";
import Logo from "/icons/Logo";
import { Container, Message_Button } from "./MainNavbarStyles";
import NavOptions from "./NavOptions/NavOptions";

const MainNavbar = () => {
  return (
    <Container h="64px" w="100%" percent>
      <Logo size="26" className="topnav_logo" />
      <NavOptions />
      <Message_Button solid>
        <img className="icon" src="message.png" alt="Message Icon" />
        <Text className="messageText" color="secondary" font="body2">
          message
        </Text>
      </Message_Button>
    </Container>
  );
};

export default MainNavbar;
