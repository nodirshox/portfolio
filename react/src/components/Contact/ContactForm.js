import React, {useState} from "react";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {AxiosClient} from "../../axios";

function ContactForm() {
  const [isSend, setIsSend] = useState(false);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const sendButtonHandler = async () => {
    if (title.length === 0) {
      alert("Title is required");
    } else if(message.length === 0) {
      alert("Message is required");
    } else if (name.length === 0) {
      alert("Name is required");
    } else if (email.length === 0) {
      alert("Email is required");
    } else {
      try {
        await AxiosClient.post("/contacts", {
          title, message, email, name, phone});
        setTitle("");
        setMessage("");
        setEmail("");
        setName("");
        setPhone("");

        setIsSend(true);
        alert("Message sent. Thank You!");
      } catch (e) {
        alert("Error on sending the message. Try again");
      }
    }
  }

  return (
    <Card className="quote-card-view">
      <Form>
        <Form.Group className="mb-3" controlId="messageTitleId">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" value={title} required onChange={(e) => setTitle(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="messageId">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" value={message} onChange={(e) => setMessage(e.target.value)} rows={2} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="emailId">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="nameId">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="phoneId">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
          <Form.Text className="text-muted">
            Optional
          </Form.Text>
        </Form.Group>

        {
          !isSend &&
          (
            <Button variant="primary" onClick={sendButtonHandler}>
              Send
            </Button>
          )
        }
        {
          isSend && (
            <p>Message sent</p>
          )
        }
      </Form>
    </Card>
  );
}

export default ContactForm;
