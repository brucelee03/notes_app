import styled from 'styled-components'

export const ListItem = styled.li`
  border: solid 1px #aab8c8;
  border-radius: 7px;
  padding: 11px;
  width: 249px;

  @media (max-width: 577px) {
    width: 100%;
  }
`

export const TitleText = styled.h1`
  color: #334155;
  font-size: 19px;
  margin-top: 3px;
`

export const NotesText = styled.p`
  color: #475569;
  font-size: 15px;
`
