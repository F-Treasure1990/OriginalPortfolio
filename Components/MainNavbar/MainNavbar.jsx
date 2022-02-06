import { Text } from "../../styles/GlobalStyles";
import Logo from "/icons/Logo";
import { Container, Message_Button } from "./MainNavbarStyles";
import NavOptions from "./NavOptions/NavOptions";
import { useTheme } from "styled-components";

const MainNavbar = () => {
  const { palette } = useTheme();

  return (
    <Container h="64px" w="100%" percent>
      <Logo size="26" className="topnav_logo" color={palette?.textFocused} />

      <NavOptions />
      <a href="mailto:fentontreasure@gmail.com">
        <Message_Button solid>
          <img className="icon" src="message.svg" alt="Message Icon" />
          {/* <Text className="messageText" color="secondary">
            message
          </Text> */}
        </Message_Button>
      </a>
    </Container>
  );
};

export default MainNavbar;
