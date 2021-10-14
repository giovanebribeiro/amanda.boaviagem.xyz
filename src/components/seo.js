import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql, StaticQuery } from "gatsby"

import { useSiteMetadata } from "../hooks/use-site-metadata"

const SEO = ({ customTitle, article, meta, keywords, lang }) => {
	const { pathName } = useLocation();

	keywords = keywords || [];

	const {
		title,
		description,
		author,
		url,
		logo,
		titleTemplate,
		favicon
	} = useSiteMetadata();

	const seo = {
		title: customTitle || title,
		description: description,
		image: `${url}${logo}`,
		url: `${url}${pathName || '/'}`,
	}

	return (
		<Helmet 
			htmlAttributes={{
				lang,
			}}
			title={seo.title} 
			titleTemplate={titleTemplate}
			meta={[
				{
				  name: `description`,
				  content: description,
				},
				{
					name: `og:type`,
					content: `website`
				},
				{
				  property: `og:title`,
				  content: title,
				},
				{
				  property: `og:description`,
				  content: description,
				},
				{
				  name: `instagram:card`,
				  content: `profile`,
				},
				{
				  name: `instagram:creator`,
				  content: author.name,
				},
				{
				  name: `instagram:title`,
				  content: `pagina90_`,
				},
				{
				  name: `instagram:description`,
				  content: `A escritora da esperança`,
				},
			  ]
				.concat(
				  keywords.length > 0
					? {
						name: `keywords`,
						content: keywords.join(`, `),
					  }
					: []
				)
				.concat(meta)}
			>

			<meta name="image" content={seo.image}/>
			<meta charSet="utf-8"/>

			<link rel="shortcut icon" href={'/' + favicon } type="image/png" />
			<meta name="facebook-domain-verification" content="1c1b34t00xiyv4fd1u3ibjzfk2uw3w" />
			<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />

			{ seo.url && <meta property="og:url" content={seo.url} /> }
			
			{ seo.image && <meta property="og:image" content={seo.image} /> }
			
			<link rel="canonical" href="https://amanda.boaviagem.xyz"/>

		</Helmet>
	);
}

export default SEO



SEO.propTypes = {
	customTitle: PropTypes.string,
	description: PropTypes.string,
	image: PropTypes.string,
	article: PropTypes.bool,
	lang: PropTypes.string
}

SEO.defaultProps = {
	customTitle: null,
	description: null,
	image: null,
	article: false,
	lang: `pt-BR`
}
