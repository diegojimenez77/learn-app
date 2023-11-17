import '../../styles/footer.scss';
import Logo from '../../common/images/learn-logo.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CelebrationIcon from '@mui/icons-material/Celebration';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<div className='footer'>
			<div className='navigation'>
				<Link to='/'>
					<img src={Logo} alt='learn-logo' />
				</Link>
				<div className='product'>
					<h4>Product</h4>
					<ul>
						<li>
							<Link to='/features'>Features</Link>
						</li>
						<li>
							<Link to='/Pricing'>Pricing</Link>
						</li>
					</ul>
				</div>
				<div className='resources'>
					<h4>Resources</h4>
					<ul>
						<li>
							<Link to='/blog'>Blog</Link>
						</li>
						<li>
							<Link to='/'>User guides</Link>
						</li>
						<li>
							<Link to='/'>Webinars</Link>
						</li>
					</ul>
				</div>
				<div className='company'>
					<h4>Company</h4>
					<ul>
						<li>
							<Link to='/aboutus'>About us</Link>
						</li>
						<li>
							<Link to='/'>Contact us</Link>
						</li>
					</ul>
				</div>
				<div className='newsletter'>
					<h4>Subscribe to out newsletter</h4>
					<p>For product announcements and exclusive insights</p>
					<form>
						<input type='text' placeholder='input your email' />
						<button>Subscribe</button>
					</form>
				</div>
			</div>
			<div className='underline'>
				<select>
					<option value=''>English</option>
					<option value=''>Spanish</option>
					<option value=''>Russian</option>
					<option value=''>Portuguese</option>
				</select>
				<div className='underline-copy'>
					<h4>© 2023 Learn, Inc.</h4>
					<ul>
						<li>About us</li>
						<li>Contact us</li>
					</ul>
				</div>
				<div className='social-media'>
					<ul>
						<li>
							<CelebrationIcon />
						</li>
						<li>
							<FacebookIcon />
						</li>
						<li>
							<YouTubeIcon />
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Footer;
