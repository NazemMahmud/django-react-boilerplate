import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { addNote } from "./NotesActions";

function AddNote(props) {
    const [content, setContent] = useState("");
// class AddNote extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       content: ""
//     };
//   }
  const onChange = e => {
    console.log("Event name: ", e.target.name);
    console.log("Event value: ", e.target.value);
    setContent(e.target.value);
    // this.setState({ [e.target.name]: e.target.value });
    console.log("State: ", content);
  };

  const onAddClick = () => {
    const note = {
      content: content
    };
    props.addNote(note);
  };

  return (
        <div>
            <h2>Add new note</h2>
            <Form>
                <Form.Group controlId="contentId">
                    <Form.Label>Note</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        name="content"
                        placeholder="Enter note"
                        value={content}
                        onChange={onChange}
                    />
                </Form.Group>
            </Form>
            <Button variant="success" onClick={onAddClick}>
                Add note
            </Button>
        </div>
    );
}

AddNote.propTypes = {
  addNote: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, { addNote })(withRouter(AddNote));