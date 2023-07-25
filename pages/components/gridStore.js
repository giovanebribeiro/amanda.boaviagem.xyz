import { Button, Grid, Text, Image, Link, Container } from "@nextui-org/react";
import styles from '../../styles/Home.module.css'
import {isMobile} from 'react-device-detect';

const GridStore = ({id, title, description, image, linkAmazon, linkUiclap, direction}) => {
  return (
    <Container className={styles.gridStore}>
      <Grid.Container css={direction === "right" || isMobile ? {flexDirection: "row", justifyContent: 'center', display: 'flex'} : {flexDirection: "row-reverse", justifyContent: 'center', display: 'flex'}}>
          <Grid sm={4} css={{justifyContent: 'center', display: 'flex'}}>
            <Image
                width={200}
                height={320}
                css={{borderRadius: 20}}
                src={image}
                alt={"book"+id}
                objectFit="cover"
              />
          </Grid>
          <Grid sm={6} css={{display: "flex", flexDirection: "column"}}>
            <Text h2 size={30} css={{color: "white", textAlign: "justify", display: 'flex'}}>
              {title}
            </Text>
            <Text b css={{textAlign: "justify", display: 'flex'}}>
              {description}
            </Text>
            <Grid css={{display: "flex", mt: "$6", flexDirection: "row"}}>
            {linkAmazon ? <ButtonAmazon link={linkAmazon}></ButtonAmazon> : null}
            {linkUiclap ? <ButtonUiclap link={linkUiclap}></ButtonUiclap> : null}
            </Grid>
          </Grid>
      </Grid.Container> 
    </Container>
  )
};

const ButtonAmazon = ({link}) => {
    return (
        <Link href={link}>
            <Button css={{mr: "$6", backgroundColor: "#cc5378", borderRadius: "20px"}} size="sm">AMAZON</Button>
        </Link>
    )
}

const ButtonUiclap = ({link}) => {
    return (
        <Link href={link}>
            <Button css={{backgroundColor: "#cc5378", borderRadius: "20px"}} size="sm">UICLAP</Button>
        </Link>
    )
}

export default GridStore