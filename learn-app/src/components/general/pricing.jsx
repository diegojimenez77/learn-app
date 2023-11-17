import PricingImage from '../../common/images/pricing.png';
import Questions from '../../common/images/questins.png';
import '../../styles/pricing.scss';

const Pricing = () => {
	return (
		<div className='pricing-content'>
			<h1>Pricing</h1>
			<p>
				At Learn Platform, we believe in providing high-quality education that's
				accessible and affordable. We offer diverse pricing plans designed to
				cater to individual learners, groups, and organizations. Let's explore
				each option below:
			</p>
			<img className='pricing-image' src={PricingImage} alt='pricing' />
			<img className='questions-image' src={Questions} alt='quest' />
		</div>
	);
};

export default Pricing;
