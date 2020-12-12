import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

const App = () => {
  const [items, setitems] = useState([]);
  const Renderingdata = (data) => {
    setitems((olditems) => {
      return [...olditems, data];
    });
  };
  const onDeleting = (id) => {
    setitems((olditems) => {
      return olditems.filter((value, index) => {
        return index !== id;
      });
    });
  };
  return (
    <div>
      <Header />
      <CreateArea renderingdata={Renderingdata} />
      {items.map((value, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={value.title}
            content={value.content}
            delete={onDeleting}
          />
        );
      })}

      <Footer />
    </div>
  );
};

export default App;
