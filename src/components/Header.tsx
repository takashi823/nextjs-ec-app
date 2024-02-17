"use client"

import { Navbar, Container } from 'react-bootstrap'

export default function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            Hello EC
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}