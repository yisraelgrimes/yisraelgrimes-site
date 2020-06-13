import React from "react"
import { Link, graphql } from 'gatsby'

import { Layout } from "../components"


export default function BlogPage({ data }) {
	return (
		<Layout title="Blog">
			<>
				{data.allMarkdownRemark.edges.map(edge => (

					<article key={edge.node.frontmatter.slug}>
						{/* <Link to={`/posts${edge.node.frontmatter.slug}`}> */}
						<Link to={edge.node.frontmatter.slug}>
							<h2>{edge.node.frontmatter.title}</h2>
						</Link>
						<p>{edge.node.frontmatter.date}</p>
						<p>{edge.node.excerpt}</p>
						<Link to={edge.node.frontmatter.slug}>Read More</Link>
					</article>

				))}
			</>
		</Layout>
	)
}


export const query = graphql`
	query {
		allMarkdownRemark(limit: 5, sort: {
			order: DESC,
			fields: [frontmatter___date]
		}) {
			edges {
				node {
					excerpt
					frontmatter {
						date(formatString: "MMMM DD, YYYY")
						title
						slug
					}
				}
			}
		}
	}
`
