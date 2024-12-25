import {ListItem, TitleText, NotesText} from './styledComponents'

const NoteItem = props => {
  const {noteDetails} = props
  const {title, notesText} = noteDetails

  return (
    <>
      <ListItem>
        <TitleText>{title}</TitleText>
        <NotesText>{notesText}</NotesText>
      </ListItem>
    </>
  )
}

export default NoteItem
