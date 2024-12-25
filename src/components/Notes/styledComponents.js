import styled from 'styled-components'

export const NotesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  height: 100vh;
  overflow-y: auto;
  font-family: 'Roboto';
`

export const Heading = styled.h1`
  font-family: 'Bree Serif';
  color: #4c63b6;
  font-size: 36px;
  font-weight: 500;
  margin: 39px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 80%;
  background-color: #ffffff;
  padding: 20px;
  box-shadow: 2px 2px 10px #475569;
  border-radius: 4px;

  @media (max-width: 577px) {
    width: 90%;
  }
`

export const TitleInput = styled.input`
  outline: none;
  border-width: 0;
  margin-bottom: 15px;
  font-size: 18px;
  font-weight: 600;
  color: #1e293b;

  @media (max-width: 577px) {
    font-size: 21px;
  }
`

export const NotesTextInput = styled.textarea`
  border-width: 0;
  font-size: 15px;
  color: #334155;
  outline: none;

  @media (max-width: 577px) {
    font-size: 18px;
  }
`

export const AddButton = styled.button`
  position: absolute;
  top: 74%;
  left: 89%;
  background-color: #4c63b6;
  border-width: 0;
  color: #ffffff;
  font-size: 15px;
  width: 68px;
  height: 33px;
  border-radius: 4px;

  @media (max-width: 577px) {
    top: 79%;
    left: 77%;
  }
`

export const NotesList = styled.ul`
  display: flex;
  align-self: flex-start;
  width: 84%;
  margin-left: 6%;
  margin-top: 24px;
  list-style: none;
  flex-wrap: wrap;
  gap: 18px;

  @media (max-width: 577px) {
    flex-direction: column;
    width: 98%;
    margin-left: -17px;
  }
`

export const EmptyNote = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin-top: 80px;
  padding-bottom: 40px;
`

export const EmptyNoteImg = styled.img`
  width: 17%;
`

export const EmptyNoteTitle = styled.h1`
  color: #334155;
  font-size: 21px;
  font-weight: 600;
  margin-bottom: 0;
`

export const EmptyNoteText = styled.p`
  font-size: 16px;
  color: #475569;
`
