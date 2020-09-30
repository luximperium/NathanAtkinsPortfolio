import React from "react";
import { Button, TextareaAutosize } from "@material-ui/core";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
        <div className="Contact">
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/xjvapavj"
        method="POST"
      >
        <h1 className="Contact-Text universal-header">Contact:</h1>
        <h3 className="universal-header">Email:</h3>
        <input type="email" placeholder="email@email.com" name="email" style={{ color: "rgb(194, 94, 0)", backgroundColor: "rgb(255, 217, 181)", height: "2em" ,width: "20em", fontSize: "12pt" }} />
        <h3 className="universal-header">Message:</h3>
        <TextareaAutosize type="text" placeholder="Your Message Here..." name="message" style={{ color: "rgb(194, 94, 0)", backgroundColor: "rgb(255, 217, 181)", height: "10em", width: "20em", fontSize: "12pt" }} />
        <h1></h1>
        {status === "SUCCESS" ? <p>Thanks!</p> : <Button type="submit" className="universal-header" style={{ color: "white" }}>Submit</Button>}
        {status === "ERROR" && <p>Ooops! There was an error. Maybe try making sure you filled everything out correctly.</p>}
      </form>
      </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}