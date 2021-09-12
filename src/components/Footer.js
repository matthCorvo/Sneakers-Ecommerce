import { Link } from 'react-router-dom'
import apple from './img/appstore (1).png'
import android from './img/playmarket.png'
const Footer = () => {
    return (
        <div  style={{backgroundColor: 'white'}}>
   <footer className="section-footer border-top" > 
	<div className="container" style={{marginTop: '20px'}}>
		<section className="footer-top padding-y">
			<div className="row">
				<aside className="col-md-4">
					<article className="mr-3">
						<h1>NIKE OUTLET	</h1>					<p className="mt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, odit consequuntur temporibus maiores blanditiis autem, consectetur optio facere, porro rem cum similique adipis.
						</p>
		
					</article>
				</aside>
				<aside className="col-sm-3 col-md-2">
					<h6 className="title">About</h6>
					<ul className="list-unstyled">
						<li> About us</li>
						<li> Services</li>
						<li> Rules and terms</li>
						<li> Blogs</li>
					</ul>
				</aside>
				<aside className="col-sm-3 col-md-2">
					<h6 className="title">Services</h6>
					<ul className="list-unstyled">
						<li> Help center</li>
						<li> Money refund</li>
						<li> Terms and Policy</li>
						<li> Open dispute</li>
					</ul>
				</aside>
				<aside className="col-sm-3  col-md-2">
					<h6 className="title">For users</h6>
					<ul className="list-unstyled" style={{cursor: "pointer"}}>
						<li>  User Login </li>
						<li> User register </li>
						<li>  Account Setting </li>
						<li>  My Orders </li>
						<li>  My Wishlist </li>
					</ul>
				</aside>
				<aside className="col-sm-2  col-md-2">
					<h6 className="title">Our app</h6>
					<div href="#" className="d-block mb-2"><img src={apple} height="40" /></div>
					<div href="#" className="d-block mb-2"><img src={android} height="40" /></div>
				</aside>
			</div> 
		</section>	

		<section className="footer-copyright border-top">
				<p className="float-left text-muted"> © 2019 Company  All rights resetved </p>
				<p target="_blank" className="float-right text-muted">
					<a href="#">Privacy &amp; Cookies</a> &nbsp;   &nbsp;
					<a href="#">Accessibility</a>
				</p>
		</section>
	</div>
</footer>
        </div>
    )
}

export default Footer
