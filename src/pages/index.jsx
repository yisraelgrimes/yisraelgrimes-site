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

					<h1>I'm a <Link to="/blog">full-stack designer</Link>, business strategy consultant, and also a few other nouns, but we'll get to that...</h1>
					<p style={{textAlign:`center`}}>oh yeah, and sometimes <Link to="/blog">I write stuff too</Link>.</p>
				</section>

				<section>
					<h3>Here</h3>
					<p>This is a place for me to gather the various projects that I’ve worked on, am working on, or will work on, from around the interwebs. A hub, of sorts. It’s also a place for my personal <Link to="/blog">blog</Link> where I write about things like design, business, strategy, or just random thoughts that don’t relate to any specific project.</p>

					<p>If you want to know more about me, then you could start here. Or if you just want to contact me, then go here.</p>

					<p>I'm the Creative Director at Tube Media Co. We're a scrappy little creative agency that focuses on small businesses and startups. If that's you and you want to take your business or idea to the next level, I'd love to chat with you about it.</p>
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
