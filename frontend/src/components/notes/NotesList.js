import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getNotes } from "./NotesActions";
import Note from "./Note";

function NotesList(props) {
    useEffect(() => {
        props.getNotes();
    }, []);

    const { notes } = props.notes;
    const header = (notes.length) ? "Notes" : "Please add your first note";
    const items = notes.map(note => {
        return <Note key={note.id} note={note} />
    });

    return (
        <div>
            <h2>{header}</h2>
            {items}
            <hr /> 
        </div>
    );
}

NotesList.propTypes = {
    getNotes: PropTypes.func.isRequired,
    notes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    notes: state.notes
});

export default connect(mapStateToProps, {getNotes})(withRouter(NotesList));