// Primary Navigation Component
import React from "react"
import { Link } from "gatsby"

import styles from "./nav.module.sass"


function _Item({ name, path }) {
	return (
		<li key={name}>
			<Link to={path}>
				{name}
			</Link>
		</li>
	)
}


export function Nav() {
	return (
		<nav className={styles.nav} role="navigation">
			<ul>
				<_Item name="Home" path="/" />
				<_Item name="Me" path="/me" />
				<_Item name="Blog" path="/blog" />
			</ul>
		</nav>
	)
}
