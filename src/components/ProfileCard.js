import React from 'react';
import {Card, Container, Row, Col} from "react-bootstrap";
import classes from '../css/ProfileCard.module.css'
import ProfilePic from '../images/profile_pic.png';
import ProfileBackground from '../images/profile_background.jpeg';
import { ImLinkedin, ImGithub } from 'react-icons/im';

export default function ProfileCard(props) {
  return (
    <div className={classes.Background}>
        <Container className="py-5" >
            <Card className={classes.ProfileCard + " mx-auto"} >
                <Card.Img className={classes.ProfileCardBackgroundImage} alt="Background Image" variant="top" src={ProfileBackground} />
                <Card.Img className={classes.ProfileCardImage} alt="User Image" src={ProfilePic}/>
                <Card.Body className={"text-center " + classes.ProfileCardBody}>
                    <Card.Text className={classes.TextBold + " mb-0"}>
                        Abduboriy Abdurakhmonov
                    </Card.Text>
                    <Card.Text className={classes.TextMuted}>
                        United States - Missouri
                    </Card.Text>
                    <Card.Text className={classes.TextMuted}>
                        +1 636.377.0777
                    </Card.Text>
                    <Card.Text className={classes.TextMuted}>
                        uzbekbory@gmail.com
                    </Card.Text>
                </Card.Body>
                <Card.Footer className={classes.CardFooter}>
                    <Row xs="2" className="text-center mb-1">
                        <Col>
                            <ImLinkedin size={60} color='#0072b1'/>
                        </Col>
                        <Col>
                            <ImGithub size={60} color='#4078c0'/>
                        </Col>
                    </Row>
                </Card.Footer>
            </Card>
        </Container>
    </div>
  )
}
