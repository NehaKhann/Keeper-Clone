import React from "react";
import DeleteTwoToneIcon from "@material-ui/icons/DeleteTwoTone";

function Note(props) {
  const Deletingdata = () => {
    props.delete(props.id);
  };
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={Deletingdata}>
        <DeleteTwoToneIcon />
      </button>
    </div>
  );
}

export default Note;
