import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import { Layout, PostExcerpt } from "../components"


export default function IndexPage() {
	const data = useStaticQuery(_GET_POSTS)

	return (
		<Layout title="Home">
			<div className="home">
				<section>
					<h2>
						<span className="home-hello">Hello, I'm</span>
						<span className="home-name">Yisrael Grimes.</span>
					</h2>

					{/* <h1>I'm a <Link to="/blog">full-stack designer</Link>, business strategy consultant, and also a few other nouns, but we'll get to that...</h1> */}

					<h1>I'm a developer with a background in design, a business strategy consultant, and also a few other nouns, but we'll get to that...</h1>

					{/* <p style={{textAlign:`center`}}>oh yeah, and sometimes <Link to="/blog">I write stuff too</Link> (though admittedly, it's been a while since I've published anything)</p> */}

					<p style={{textAlign:`center`}}>oh yeah, it's been a while since I've published anything, but sometimes <br /><Link to="/blog">I write stuff too</Link></p>

				</section>

				<section>
					<h3>Here</h3>
					<p>This is a place for me to gather the various projects that I’ve been involved in from around the interwebs and also place for my personal <Link to="/blog">blog</Link> where I write about things like design, development, business strategy, or pretty much anything else that I think is interesting.</p>

					<p>If you want to know more about me, then you could start <Link to="/me">here</Link>.</p>

				</section>

				<section>
					<h3>Fresh Off The Blog</h3>

					{data.allMarkdownRemark.edges.map(edge => (
						<PostExcerpt
							key={edge.node.frontmatter.slug}
							data={edge.node}
							page="home"
						/>
					))}

				</section>
			</div>
		</Layout>
	)
}


const _GET_POSTS = graphql`
	query RecentPosts {
		allMarkdownRemark(limit: 3, sort: {
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
