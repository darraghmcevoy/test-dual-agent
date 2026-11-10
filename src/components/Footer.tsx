type FooterProps = {
  text?: string
}

function Footer({ text = 'Built with Claude Code and Codex on separate branches.' }: FooterProps) {
  return (
    <footer id="footer">
      <p>{text}</p>
    </footer>
  )
}

export default Footer
