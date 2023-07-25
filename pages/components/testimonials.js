import Slider from './slider'
import { Text } from '@nextui-org/react'
import DataTestimonials from '../../public/data/DataTestimonials'
import styles from '../../styles/Home.module.css'
import {isMobile} from 'react-device-detect';


const Testimonials = () => {
  return (
    <div className='Testimonials'>
        <Text h2 size={40} weight="bold" className={styles.testimonials} css={{color: "#2d638e"}}>
            Depoimentos
        </Text>
        {isMobile ? <Slider className="SliderMobile" images={DataTestimonials.items.ImagesMobile}></Slider> : <Slider className="Slider" images={DataTestimonials.items.Images}></Slider>}
    </div>
  )
}

export default Testimonials