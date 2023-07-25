import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card, Grid, Text, Row, Button, Link} from "@nextui-org/react";
import styles from '../../styles/Home.module.css'

const InstaFeed = () => {
    const [feedList, setFeedList] = useState([]);

    async function getInstaFeed() {
        const token = 'IGQVJXVnMtNFVXUUQ2RlcwUUdic3BBQkQ2bTRQeHdpUzdKQWNwdjFJa00xNUdLc3NoUFZAWb3RfQ3BYX2ZAlUGJtRzd6a0xPcmY1WlRKZA2lWbWJKLVJsWHpXZAi1ERzUxU2xSdjBndnFnbzZAucVRFUGF6TQZDZD'
        const fields = "media_url,media_type,permalink,caption,timestamp"
        const url = `https://graph.instagram.com/me/media?fields=${fields}&access_token=${token}`
        const { data } = await axios.get(url);
        setFeedList(Object.values(data.data).slice(0, 3))
    }

    useEffect(() => {
        getInstaFeed();
    }, []);

    return (
        <div style={{background: "#accae2", paddingBottom: 100}}>
            <Text h2 size={40} weight="bold" color='#2d638e' className={styles.storeTitle} style={{paddingBottom: 50}}>
                Redes sociais
            </Text>
            <div className={styles.instaFeed}>
                {feedList.map(item => (
                    <Grid.Container key={item.id} justify='center' css={{margin: 20}}>
                        <Grid sm={12} md={5}>
                            <Card css={{ p: "$6"}} className={styles.cardInsta} variant="bordered">
                                <Card.Header css={{justifyContent: "center"}}>
                                    <a href={item.permalink} target='_blank'>
                                        {item.media_type === "VIDEO" ? 
                                        <video style={{maxWidth: 100, maxHeight: 100}} controls>
                                            <source src={item.media_url}/>
                                        </video> : 
                                        <img style={{maxWidth: 100, maxHeight: 100, borderRadius: 30}} src={item.media_url} alt={"img"+item.id}></img>}
                                    </a>
                                </Card.Header>
                            <Card.Divider />
                            <Card.Body css={{ py: "$10", justifyContent: "center" }}>
                                <Text b css={{ pl: "$6", wordBreak: "break-word" }}>
                                    {item.caption.length < 50 ? item.caption : item.caption.slice(0,50) + "..."}
                                </Text>
                            </Card.Body>
                            <Card.Divider />
                            <Card.Footer>
                                <Row justify="center">
                                    <Link href={item.permalink}>
                                        <Button css={{backgroundColor: "#cc5378", borderRadius: "20px"}} size="sm">Ver</Button>
                                    </Link>
                                </Row>
                            </Card.Footer>
                            </Card>
                        </Grid>
                    </Grid.Container>
                ))}
            </div>
        </div>
       
    )
}

export default InstaFeed