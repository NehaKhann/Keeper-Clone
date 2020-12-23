import React, { useState } from "react";

function CreateArea(props) {
  const [data, setdata] = useState({
    title: "",
    content: ""
  });
  const [state, setstate] = useState(false);
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
  const expand = () => {
    setstate(true);
  };
  const vanish = () => {
    setstate(false);
  };

  return (
    <div className="form" onDoubleClick={vanish}>
      {state ? (
        <input
          name="title"
          placeholder="Title"
          value={data.title}
          onChange={Storingdata}
          autoComplete="off"
        />
      ) : null}

      <textarea
        name="content"
        placeholder="Take a note..."
        rows="3"
        value={data.content}
        onChange={Storingdata}
        autoComplete="off"
        onClick={expand}
      />
      {state ? <button onClick={Showingdata}>Add</button> : null}
    </div>
  );
}

export default CreateArea;
