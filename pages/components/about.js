import React from 'react'
import styles from '../../styles/Home.module.css'
import DataAbout from '../../public/data/DataAbout'
import { Card, Grid, Text, Container, Image } from "@nextui-org/react";

const About = () => {
  return (
    <Container xl display='flex' className={styles.grid}>
      <Card css={{ p: "$6", background: "#2d638e", mw: 800}}>
        <Card.Header>
          <Grid.Container>
            <Grid xs={12}>
              <Text h2 css={{ lineHeight: "$xs", color: "white" }}>
                {DataAbout.title}
              </Text>
            </Grid>
          </Grid.Container>
        </Card.Header>
        <Card.Body css={{ py: "$2" }}>
          <Grid.Container css={{display:"flex"}}>
            <Grid xs={12} sm={8}>
                <Text b css={{color: "white", textAlign: "justify", display: "flex"}}>
                  {DataAbout.body} <br/> <br/> {DataAbout.body2}
                </Text>
            </Grid>
            <Grid xs={12} sm={4}>
              <Image
                width={200}
                height={320}
                css={{borderRadius: 20}}
                src="/images/session02/amanda.jpeg"
                alt="Amanda"
                objectFit="cover"
              />
            </Grid>
          </Grid.Container>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default About;