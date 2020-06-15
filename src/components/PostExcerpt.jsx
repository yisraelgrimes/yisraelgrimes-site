// Blog post page-template:
// Create Pages using 'gatsby-node.js' when '.md'
// files are added to the '/src/posts/' directory

import React from "react"
import { Link } from "gatsby"

import styles from "./PostExcerpt.module.sass"


// Page template for individual blog post
export function PostExcerpt({data, titleTag, page}) {

	return (
		<article className={`${styles.excerpt} excerpt`}>

			<Link to={data.frontmatter.slug}>
				{(page === `home`) ? (
					<h4>{data.frontmatter.title}</h4>
				):(
					<h2>{data.frontmatter.title}</h2>
				)}
			</Link>

			<time>{data.frontmatter.date}</time>

			<p>{data.excerpt}</p>

			<Link to={data.frontmatter.slug} className="more">Read More</Link>

		</article>
	)
}
