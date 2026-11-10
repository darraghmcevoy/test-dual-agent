type HeaderProps = {
  title: string
  level?: 1 | 2 | 3 | 4 | 5 | 6
}

function Header({ title, level = 1 }: HeaderProps) {
  const Tag = `h${level}` as const
  return (
    <header>
      <Tag>{title}</Tag>
    </header>
  )
}

export default Header
