type FooterNoteProps = {
  text?: string
}

function FooterNote({ text = 'Scenario 2: one agent edits while another reviews from a separate worktree.' }: FooterNoteProps) {
  return (
    <p>{text}</p>
  )
}

export default FooterNote
