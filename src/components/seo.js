import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql, StaticQuery } from "gatsby"

import { useSiteMetadata } from "../hooks/use-site-metadata"

const SEO = ({ customTitle, article }) => {
	const { pathName } = useLocation();

	const {
		title,
		description,
		url,
		logo,
		titleTemplate
	} = useSiteMetadata();

	const seo = {
		title: customTitle || title,
		description: description,
		image: `${url}${logo}`,
		url: `${url}${pathName || '/'}`,
	}

	return (
		<Helmet title={seo.title} titleTemplate={titleTemplate}>

			<meta name="description" content={seo.description}/>
			<meta name="image" content={seo.image}/>
			<meta charSet="utf-8"/>
			<meta name="facebook-domain-verification" content="1c1b34t00xiyv4fd1u3ibjzfk2uw3w" />
			<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />

			{ seo.url && <meta property="og:url" content={seo.url} /> }
			
			{ (article ? true: null) && <meta property="og:type" content="article" /> }

			{ seo.title && <meta property="og:title" content={seo.title} /> }
			
			{ seo.description && <meta property="og:description" content={seo.description} /> }
			
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
}

SEO.defaultProps = {
	customTitle: null,
	description: null,
	image: null,
	article: false
}
