import styles from '../../styles/Home.module.css'
import { Image, Grid, Link, Navbar, useTheme, Text } from "@nextui-org/react";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { useState } from 'react';

const HeaderProject = ({isInitialPage = true}) => {
  const variant = ["static", "floating", "sticky"];
  const colors = ["primary", "secondary", "success", "warning", "error"];
  const { isDark } = useTheme();
  const [activeColor, setActiveColor] = useState("secundary");
  return (
    <div className={styles.header}>
      <Grid.Container>
            <Grid xs={isInitialPage ? 10 : 8} >
              <Image
                containerCss={{margin: 0}}
                css={{paddingLeft: "20px"}}
                width={400}
                height={120}
                src="/images/session01/logo.png"
                alt="Amanda"
                objectFit="fill"
              />
            </Grid>
            {!isInitialPage ? <Grid xs={2} css={{display: "content", justifyContent: "end"}}>
              <Link href="/">
                <Text b css={{color: "white"}}>Inicio</Text>
              </Link>
            </Grid> : null}
            <Grid xs={1} css={{display: "content", justifyContent: "end"}}>
              <Link href="https://www.instagram.com/pagina90_/">
                <FaInstagram style={{color: "white", width: "30px", height: "30px"}}/>
              </Link>
            </Grid>
            <Grid xs={1} css={{display: "content"}}>
              <Link href="https://www.linkedin.com/in/amanda-boaviagem/">
                <FaLinkedin style={{color: "white", width: "30px", height: "30px"}}/>
              </Link>
            </Grid>
      </Grid.Container>
    </div>
  )
}

export default HeaderProject