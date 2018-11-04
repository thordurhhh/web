import Document, { Head, Main, NextScript } from 'next/document'
import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
    <div>
        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/page2">
          <a style={linkStyle}>Page 2</a>
        </Link>
    </div>
)

export default Header