import React from "react"
import { graphql } from 'gatsby'

import { Layout, PostExcerpt } from "../components"


export default function BlogPage({ data }) {
	return (
		<Layout title="Blog">
			{data.allMarkdownRemark.edges.map(edge => (
				<PostExcerpt
					key={edge.node.frontmatter.slug}
					data={edge.node}
					page="blog"
				/>
			))}
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
