/* eslint jsx-a11y/alt-text: 0 */

import React from 'react'
import { default as GatsbyImage } from 'gatsby-image'


export function Img({ image, caption, children, ...props }) {
	const imageCaption = caption || children
	if (!image) {
		return null
	}
	return (
		<figure>
			{(image.extension === `gif`) ? (
				<img src={image.publicURL} {...props} />
			):(
				<GatsbyImage fluid={image.childImageSharp.fluid} {...props} />
			)}

			{(imageCaption && <figcaption>{imageCaption}</figcaption>)}

		</figure>
	)
}
