import { ButtonDefault } from './style'

export default function Button({ text, onClick, type = 'button' }) {
  return (
    <ButtonDefault type={type} onClick={onClick}>
      {text}
    </ButtonDefault>
  )
}
