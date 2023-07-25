import { Image, Grid, Link } from "@nextui-org/react";
import { FaChevronUp } from "@react-icons/all-files/fa/FaChevronUp";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import styles from '../../styles/Home.module.css'

const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

function scrollToTop() {
  console.log("aqui")
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

const FooterProject = () => {
  return (
    <footer >
      <button className={styles.goToTopButton} title="Back to Top" onClick={scrollToTop}>
        <FaChevronUp/>
      </button>
      <Grid.Container>
        <Grid xs={10} >
          <Image
              containerCss={{margin: 0}}
              css={{paddingLeft: "40px"}}
              width={400}
              height={120}
              src="/images/footer/AB-footer.svg"
              alt="Amanda"
              objectFit="fill"
            />
        </Grid>
        <Grid xs={1} css={{display: "content", justifyContent: "end"}}>
          <Link href="https://www.instagram.com/pagina90_/">
            <FaInstagram style={{color: "#2d638e", width: "30px", height: "30px"}}/>
          </Link>
        </Grid>
        <Grid xs={1} css={{display: "content"}}>
          <Link href="https://www.linkedin.com/in/amanda-boaviagem/">
            <FaLinkedin style={{color: "#2d638e", width: "30px", height: "30px"}}/>
          </Link>
        </Grid>
      </Grid.Container>
    </footer>
  )
}

export default FooterProject