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
						<h1>NIKE OUTLET	</h1>					<p className="mt-3">Découvrez la qualité supérieure des chaussures, vêtements et accessoires de sport Nike. Trouvez tout ce dont vous avez besoin pour vous entraîner, vous détendre ou afficher votre style. Rejoignez la communauté Nike et adoptez une marque qui inspire les athlètes du monde entier.
						</p>
		
					</article>
				</aside>
				<aside className="col-sm-3 col-md-2">
				<h6 className="title">À propos</h6>
					<ul className="list-unstyled" style={{textTransform: 'lowercase',cursor: "pointer"}}>
						<li> 	TROUVER UN MAGASIN
</li>
						<li> 			S'INSCRIRE 
</li>
						<li> 				DEVENIR MEMBRE
</li>
						<li> 				RÉDUCTION 
</li>
					</ul>
				</aside>
				<aside className="col-sm-3 col-md-2">
					<h6 className="title">AIDE
</h6>
					<ul className="list-unstyled"style={{cursor: "pointer"}}>
						<li>Commande</li>
						<li>Expédition </li>
						<li> Retours</li>
						<li>Paiement</li>
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
					<div href="#">Conditions d'utilisation &amp;Mentions légales </div> 
				</p>
		</section>
	</div>
</footer>
        </div>
    )
}

export default Footer
