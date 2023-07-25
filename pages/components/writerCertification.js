import { Card, Grid, Text } from "@nextui-org/react";
import styles from '../../styles/Home.module.css'

const WriterCertification = () => {
  return (
    <div className={styles.writerCertification}>
        <Card css={{ p: "$6", mw: "300px" }}>
            <Card.Header>
                <img
                alt="iconCertificate"
                src="/images/session08/icon-certificate.svg"
                width="34px"
                height="34px"
                />
                <Grid.Container css={{ pl: "$6" }}>
                    <Grid xs={12}>
                        <Text h4 css={{ lineHeight: "$xs", color: '#2d638e'}}>
                        Escritor 360
                        </Text>
                    </Grid>
                    <Grid xs={12}>
                        <Text css={{ color: '#2d638e' }}>Lilian Cardoso (Agência LC)</Text>
                    </Grid>
                </Grid.Container>
            </Card.Header>
        </Card>
    </div>
  )
}

export default WriterCertification