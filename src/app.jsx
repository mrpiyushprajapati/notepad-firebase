import React from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./note";
import CreateArea from "./createArea.jsx";
import { getFirestore } from "firebase/firestore"
import { collection, onSnapshot, addDoc, doc, deleteDoc } from "firebase/firestore";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
        notes: [],
        loading: true
    }
    this.coll = collection(getFirestore(),'notes');
  }

  async componentDidMount(){
    onSnapshot((this.coll), (querySnapshot) => {
      const notes = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        data['id'] = doc.id;
        return data; 
      });

      this.setState({
        notes,
        loading: false
      });
    });
  }

  async addNote(newNote) {
    await addDoc(collection(getFirestore(),'notes'), {
      title: newNote.title,
      content: newNote.content
    });
  }

  async deleteNote(id) {
    await deleteDoc(doc(collection(getFirestore(),'notes'), id));
  }

  render(){
    const {notes,loading} = this.state
    return (
      <div>
        <Header />
        <CreateArea onAdd={this.addNote} />
        {loading && 
          <h1>Loading Products ...</h1>
        }
        {!loading && notes.map((noteItem, index) => {
          return (
            <Note
              key={noteItem.id}
              id={noteItem.id}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={this.deleteNote}
            />
          );
        })}
        <Footer />
      </div>
    );
  }
}

export default App;
