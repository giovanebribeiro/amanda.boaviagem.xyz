import { Grid, Row } from "@nextui-org/react";
import styles from '../../styles/Home.module.css'

const ContactUs = () => {
    return (
        <div className={styles.contactUs}>
            <Grid.Container gap={2} justify="center">
                <Grid xs={12} sm={6} className={styles.collumnContactUs}>
                    <Row css={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <a href="https://wa.me/message/AKIVPN2G3U6JF1"><img src="/images/session10/zap_button.svg" alt="zap_button"/></a>
                    </Row>
                    <Row css={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                        <img src="/images/session10/contactUsWoman.png" alt="zap_button"/>
                    </Row>
                </Grid>
                <Grid xs={12} sm={6}>
                    <Row>
                        <iframe className={styles.frame} src='https://us1.list-manage.com/contact-form?u=9e534ff37fa43868c9fce8138&form_id=720d09deabdd3fca227392573473c493'></iframe>
                    </Row>
                </Grid>
            </Grid.Container>
        </div>
    )
}

export default ContactUs