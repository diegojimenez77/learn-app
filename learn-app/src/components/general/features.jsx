import Feature1 from '../../common/images/feature1.png';
import Feature2 from '../../common/images/feature2.png';
import '../../styles/features.scss';

const Features = () => {
	return (
		<div className='features-container'>
			<h1>Features</h1>
			<h2>Learning</h2>
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
				sint ratione et tempora provident. Pariatur maiores, corrupti maxime
				porro est officia temporibus inventore ducimus dolorem similique neque.
				Deserunt, eaque in.
			</p>
			<div className='feature-detail1'>
				<div className='feature-text'>
					<h3>Feature</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet iste
						illo facilis hic similique vero, doloribus cupiditate,
						exercitationem, suscipit architecto possimus quo? Quae dolor quo,
						sed temporibus nisi aperiam laudantium.
					</p>
					<button>Try now</button>
				</div>
				<img src={Feature1} alt='' />
			</div>
			<div className='feature-detail2'>
				<div className='feature-text'>
					<h3>Feature</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet iste
						illo facilis hic similique vero, doloribus cupiditate,
						exercitationem, suscipit architecto possimus quo? Quae dolor quo,
						sed temporibus nisi aperiam laudantium.
					</p>
					<button>Try now</button>
				</div>

				<img src={Feature2} alt='' />
			</div>
		</div>
	);
};

export default Features;
