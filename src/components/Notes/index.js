import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import NoteItem from '../NoteItem'

import {
  NotesContainer,
  Heading,
  Form,
  TitleInput,
  NotesTextInput,
  AddButton,
  NotesList,
  EmptyNote,
  EmptyNoteImg,
  EmptyNoteTitle,
  EmptyNoteText,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [notesText, setNotesText] = useState('')
  const [notesList, setNotesList] = useState([])

  const onChangeNotesText = event => {
    setNotesText(event.target.value)
  }
  const onChangeTitle = event => {
    setTitle(event.target.value)
  }
  const onAddNotes = event => {
    event.preventDefault()
    const newNote = {
      id: uuidv4(),
      title,
      notesText,
    }

    setNotesList(prevNotesList => [...prevNotesList, newNote])

    setTitle('')
    setNotesText('')
  }

  return (
    <NotesContainer>
      <Heading>Notes</Heading>
      <Form onSubmit={onAddNotes}>
        <TitleInput
          type="text"
          value={title}
          onChange={onChangeTitle}
          placeholder="Title"
        />
        <NotesTextInput
          value={notesText}
          onChange={onChangeNotesText}
          placeholder="Take a Note..."
          rows="6"
        />
        <AddButton type="submit">Add</AddButton>
      </Form>
      {notesList.length > 0 ? (
        <NotesList>
          {notesList.map(eachNote => (
            <NoteItem key={eachNote.id} noteDetails={eachNote} />
          ))}
        </NotesList>
      ) : (
        <EmptyNote>
          <EmptyNoteImg
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
            alt="notes empty"
          />
          <EmptyNoteTitle>No Notes Yet</EmptyNoteTitle>
          <EmptyNoteText>Notes you add will appear here</EmptyNoteText>
        </EmptyNote>
      )}
    </NotesContainer>
  )
}

export default Notes
