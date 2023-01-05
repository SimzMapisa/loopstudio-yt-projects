import Image from 'next/image';
import styles from '../styles/Home.module.css';
import bg from '../public/images/mobile/image-hero.jpg';
import vrImage from '../public/images/mobile/image-interactive.jpg';

export default function Home() {
	return (
		<div className={styles.main_container}>
			<section className={styles.hero_container}>
				<div className={styles.image_container}>
					<Image
						src={bg}
						alt='hero image'
						className={styles.hero_image}
						placeholder='blur'
					/>
				</div>

				<div className={styles.content_container}>
					<div className={styles.hero_text}>
						<h1 className={styles.hero_title}>
							Immersive experience that deliver
						</h1>
					</div>
				</div>
			</section>
			<section className={styles.vr}>
				<div className={styles.content_wrapper}>
					<div className={styles.vr_image_container}>
						<Image src={vrImage} height={300} />
					</div>
					<div className={styles.text}>
						<h2>The leader in interactive vr</h2>
						<p>
							Founded in 2011, loopstudios has been producing world-class
							virtual reality projects for some of the best companies around the
							globe. Our award-winning creations have transformed businesses
							through digital experiences that bind to their brand.
						</p>
					</div>
				</div>
			</section>
		</div>
	);
}
