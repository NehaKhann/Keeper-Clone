import React, { useState } from "react";

function CreateArea(props) {
  const [data, setdata] = useState({
    title: "",
    content: ""
  });
  const Storingdata = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setdata((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  };
  const Showingdata = () => {
    props.renderingdata(data);
    setdata({
      title: "",
      content: ""
    });
  };

  return (
    <div className="form">
      <input
        name="title"
        placeholder="Title"
        value={data.title}
        onChange={Storingdata}
        autoComplete="off"
      />
      <textarea
        name="content"
        placeholder="Take a note..."
        rows="3"
        value={data.content}
        onChange={Storingdata}
        autoComplete="off"
      />
      <button onClick={Showingdata}>Add</button>
    </div>
  );
}

export default CreateArea;
