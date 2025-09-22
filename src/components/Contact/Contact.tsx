import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Ready to get started on your project? </p>
        <p>Contact me now for a Free consultation.</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:sandeshchougala205@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:sandeshchougala205@gmail.com">sandesh@gmail.com</a>
        </div>
        <div>
        <a href="tel:+91 6360428201"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+91 6360428201">(+91) 6360428201</a>
        </div>  
      </div>
    </Container>
  )
}