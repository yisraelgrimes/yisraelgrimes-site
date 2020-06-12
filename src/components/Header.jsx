import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import { Nav, Logo } from "."

import styles from "./header.module.sass"


const _GET_TITLE = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
	}
`

export function Header() {
	const { site } = useStaticQuery(_GET_TITLE)

	return (
		<header>
			{/* Site Logo */}
			<Link to="/">
				<span className="u_sr_only">{site.siteMetadata.title}</span>
				{/* Div around logo is temporary */}
				<Logo
					fillColor="orange"
					title="SpaceCat"
					desc="This is a cat wit an astronaut helmet"
					className={styles.logo}
				/>

			</Link>

			<Nav />

		</header>
	)
}
