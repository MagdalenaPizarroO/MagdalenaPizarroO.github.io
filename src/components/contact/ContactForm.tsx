import { EmailCon, FormCon, Input, MessageCon, NameCon, ResetButton, SendButton, Textarea, Title, TitleCon } from "./ContactFormElements";

// action="https://formspree.io/f/xrgwbdyr"
export function ContactForm() {
  return (
    <>
        <form action="https://formspree.io/f/xrgwbdyr" method="POST">
      <FormCon>
        <TitleCon>
        <Title>Contact Me</Title>
        </TitleCon>
          <NameCon>Your Name:</NameCon>
          <Input type="text" name="name" required />
          <EmailCon>Your Email:</EmailCon>
          <Input type="email" name="email" required/>
          <MessageCon>Your Message:</MessageCon>
          <Textarea name="message" required />
          <SendButton type="submit">Send</SendButton>
          <ResetButton type="reset">Reset</ResetButton>
      </FormCon>
        </form>
    </>
  );
}
