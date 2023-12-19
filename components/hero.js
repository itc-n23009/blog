import styles from 'styles/hero.module.css'

const Hero = ({title, subtitle, imageOn = false}) => {
 return (
 <div>
   <div className={styles.flexContainer}>
  <h1 className={styles.title}>{title}</h1>
  <p className={styles.subtitle}>{subtitle}</p>
   </div>
   {imageOn && <figure> [画像] </figure>}
 </div>
 )
}

export default Hero
