import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function createNotes(newNotes) {
  return (
    <Note
      key={newNotes.key}
      title={newNotes.title}
      content={newNotes.content}
    />
  );
}

function App() {
  return (
    <div>
      <Header />
      {notes.map(createNotes)};
      <Footer />
    </div>
  );
}

export default App;
