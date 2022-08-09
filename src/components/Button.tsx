import { MouseEventHandler } from 'react'

export type ButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>
  label: string
  variant?: 'primary' | 'secondary' | 'default'
  size?: 'small' | 'large'
}

export default function Button({
  onClick,
  label,
  variant = 'default',
}: ButtonProps) {
  return <button onClick={onClick}>{label}</button>
}
