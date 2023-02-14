/* eslint-disable @next/next/no-img-element */
import Button from "@/components/Button"
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide"
import { GoChevronRight } from "react-icons/go"
import styles from "./homeSlide.module.scss"
const HomeSliderComponent = () => {
	return (
		<section>
			<Splide
				className='HomeSlider'
				hasTrack={false}
				aria-label='Слайдер игр для главной страницы'
				options={{
					type: "loop",
					perPage: 1,
					mediaQuery: "min",
					cover: true,
					maxWidth: 1280,
					maxHeight: 700,
					autoHeight: true,
					breakpoints: {
						1040: {
							padding: "17%",
							gap: "25px",
							focus: "center",
						},
					},
				}}
			>
				<SplideTrack className={`homeSlider`}>
					<SplideSlide>
						<img
							src={"/Home/Slider/nfs2.jpeg"}
							alt='Need For Speed image 2'
							title='Need For Speed image 2'
						/>
						<div className={`${styles.slideWithContent}`}>
							<img
								className={`${styles.smallLogo}`}
								src={"/Home/Slider/smallLogo.png"}
								alt='Need For Speed image 2'
								title='Need For Speed image 2'
							/>
							<p className={styles.paragraph}>
								Тотальная война нового поколения началась! Сыграйте в Battlefield™ 2042 уже сегодня.
								Адаптируйтесь и процветайте!
							</p>
							<div className={styles.prices}>
								<span className={styles.price}>4 999 Р</span>
								<span className={styles.sale}>-25%</span>
								<span className={styles.priceWithoutSale}>6 999 Р</span>
							</div>
							<div className={styles.addButtons}>
								<Button className={styles.addButton} borderStyles='none' variant='white'>
									В корзину
								</Button>
								<Button className={styles.addButton} variant='light-gray' borderStyles='none'>
									В избранное
								</Button>
							</div>
						</div>
					</SplideSlide>
					<SplideSlide>
						<img
							src={"/Home/Slider/nfs1.jpeg"}
							alt='Need For Speed image 1'
							title='Need For Speed image 1'
						/>
					</SplideSlide>
					<SplideSlide>
						<img
							src={"/Home/Slider/nfs3.jpeg"}
							alt='Need For Speed image 3'
							title='Need For Speed image 3'
						/>
					</SplideSlide>
				</SplideTrack>
				<div className='splide__arrows customArrows'>
					<button className='splide__arrow splide__arrow--prev customArrow'>
						<GoChevronRight color='#ffffff' />
					</button>
					<button className='splide__arrow splide__arrow--next customArrow'>
						<GoChevronRight color='#ffffff' />
					</button>
				</div>
			</Splide>
		</section>
	)
}

export default HomeSliderComponent
