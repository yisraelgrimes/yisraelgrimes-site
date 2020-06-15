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


function _Item({ name, path }) {
	return (
		<li key={name}>
			<Link to={path}>
				{name}
			</Link>
		</li>
	)
}


export function Header() {
	const { site } = useStaticQuery(_GET_TITLE)

	return (
		<header className={styles.header}>

			<nav className={styles.nav} role="navigation">
				<ul>
					<_Item name="Home" path="/" />
					<_Item name="Me" path="/me" />
					<_Item name="Blog" path="/blog" />
				</ul>
			</nav>

			{/* Site Logo */}
			<div className={styles.logo}>
				<Link to="/">
					<span className="u_sr_only">{site.siteMetadata.title}</span>

					<Logo
						// fillColor="orange"
						// title="SpaceCat"
						// desc="This is a cat wit an astronaut helmet"
						className={styles.logo}
					/>

				</Link>
			</div>

		</header>
	)
}
