import React from 'react'
import {StyledTitle, StyledSubTitle, Avatar, StyledButton} from "./../components/Styles";
import Logo from "./../assets/logo.png";


const Home = () => {
  return (
 <div>
     <div style={{
         position: "absolute",
         top: 0,
         left: 0,
         backgroundColor: "transparent",
         width: "100%",
         padding: "15px",
         display: "flex",
         justifyContent: "flex-start"
     }}> 
    <Avatar image={Logo} />

     </div>
     <StyledTitle size={65}>
         Welcome to login
     </StyledTitle>
     <StyledSubTitle size={27}>
         Feel free to explore our website
     </StyledSubTitle>

     <StyledButton to="/login">Login</StyledButton>
     <StyledButton to="/signup">Signup</StyledButton>
     
 </div>
  );
}

export default Home;