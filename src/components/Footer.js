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
					<ul className="list-unstyled">
						<li> 					<h6 className="title">TROUVER UN MAGASIN</h6>
</li>
						<li> 					<h6 className="title">S'INSCRIRE AUX E-MAILS</h6>
</li>
						<li> 					<h6 className="title">DEVENIR MEMBRE</h6>
</li>
						<li> 					<h6 className="title">RÉDUCTION POUR ÉTUDIANTS</h6>
</li>
					</ul>
				</aside>
				<aside className="col-sm-3 col-md-2">
					<h6 className="title">AIDE
</h6>
					<ul className="list-unstyled">
						<li>Statut de commande</li>
						<li>Expédition et livraison</li>
						<li> Retours</li>
						<li> Modes de paiement</li>
					</ul>
				</aside>
				<aside className="col-sm-3  col-md-2">
					<h6 className="title">À PROPOS DE NIKE
</h6>
					<ul className="list-unstyled" style={{cursor: "pointer"}}>
						<li>  Actualités</li>
						<li> Carrières </li>
						<li>  Investisseurs </li>
						<li> Développement durable </li>
					</ul>
				</aside>
				<aside className="col-sm-2  col-md-2">
					<h6 className="title">Notre app</h6>
					<div href="#" className="d-block mb-2"><img src={apple} alt='apple' height="40" /></div>
					<div href="#" className="d-block mb-2"><img src={android} alt='android' height="40" /></div>
				</aside>
			</div> 
		</section>	

		<section className="footer-copyright border-top">
				<p className="float-left text-muted"> © 2021 Company  All rights to MatthC </p>
				<p target="_blank" className="float-right text-muted" style={{cursor: "pointer"}}>
					<div href="#">Conditions d'utilisation &amp; </div> &nbsp;   &nbsp;
					<div href="#">Mentions légales</div>
				</p>
		</section>
	</div>
</footer>
        </div>
    )
}

export default Footer
