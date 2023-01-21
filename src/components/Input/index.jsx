import { InputDefault } from './style'

export default function Input({ type, placeholder, value, onChange }) {
  return (
    <InputDefault
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  )
}
