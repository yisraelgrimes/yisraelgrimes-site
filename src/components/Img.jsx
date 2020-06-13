/* eslint jsx-a11y/alt-text: 0 */

import React from 'react'
import { default as GatsbyImage } from 'gatsby-image'


export function Img({ image, ...props }) {
	if (!image) {
		return null
	}
	if (image.extension === `gif`) {
		return <img src={image.publicURL} {...props} />
	}
	return <GatsbyImage fluid={image.childImageSharp.fluid} {...props} />
}
