import styles from '../../styles/Home.module.css'
import { Avatar, Text, Grid, Container, Row } from "@nextui-org/react";
import DataHopeWriter from '../../public/data/DataHopeWriter';
import {isMobile} from 'react-device-detect';


const HopeWriter = () => {
  return (
    <Container xl className={styles.hopeWriter}>
        <Row xs={12} justify="center">
            <Avatar src="/images/session02/amanda.jpeg"
            css={{size: 200}}
            bordered
            borderWeight="bold">
            </Avatar>
        </Row>
        <Row xs={12} justify="center" >
            <Text h2 css={{ lineHeight: "$xs", color: "white" , marginTop: "20px", textAlign: "center"}}>{DataHopeWriter.title}</Text>
        </Row>
        <Row xs={12} justify="center">
            <Text b css={isMobile ? {margin: "20px", color: "white", textAlign: "justify", mw: 800} : {margin: "60px", color: "white", textAlign: "justify", mw: 800}}>{DataHopeWriter.content}</Text>
        </Row>
    </Container>
  )
}

export default HopeWriter