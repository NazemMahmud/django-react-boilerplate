import React, {  } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { deleteNote, updateNote } from "./NotesActions";
import { Button } from "react-bootstrap";

function Note(props) {
    const onDeleteClick = () => {
        const { note } = props;
        props.deleteNote(note.id);
    };
    const onUpperCaseClick = () => {
        const { note } = props;
        props.updateNote(note.id, {
          content: note.content.toUpperCase()
        });
    };
    const onLowerCaseClick = () => {
        const { note } = props;
        props.updateNote(note.id, {
          content: note.content.toLowerCase()
        });
    };

    const { note } = props;
    
    return (
        <div>
            <hr />
            <p>
                (id:{note.id}) {note.content}
            </p>
            <Button variant="secondary" size="sm" onClick={onUpperCaseClick}>
                Upper case
            </Button>{" "}
            <Button variant="info" size="sm" onClick={onLowerCaseClick}>
                Lower case
            </Button>{" "}
            <Button variant="danger" size="sm" onClick={onDeleteClick}>
                Delete
            </Button>
        </div>
    );
}
  
Note.propTypes = {
    note: PropTypes.object.isRequired
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, { deleteNote, updateNote })(
    withRouter(Note)
);