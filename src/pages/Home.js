import React from 'react'
import { Container, Row } from 'react-bootstrap'
import ProfileCard from '../components/ProfileCard'

export default function Home() {
  return (
    <Container>
        <Row className='text-center'>
            <ProfileCard name={"Bory"} description={"Blabla"} link={"home"} solutionlink={"bob"}/>
        </Row>
    </Container>
  )
}
