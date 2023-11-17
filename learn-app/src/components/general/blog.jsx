import BlogImage from '../../common/images/blog.png';
import '../../styles/blog.scss';

const Blog = () => {
	return (
		<div className='blog-content'>
			<h1>Blog</h1>
			<img src={BlogImage} alt='' />
		</div>
	);
};

export default Blog;
