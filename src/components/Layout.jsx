// Basic page structure
import React from "react"
import PropTypes from "prop-types"

import { Header, Footer, SEO } from "."

import styles from "./layout.module.sass"


export function Layout({ title, children, pageClass }) {
	return (
		<>
			<SEO title={title} />

			{/* Accessibility Skiplink */}
			<a className={styles.skiplink} href="#scroll-main">
					Jump to main content.
			</a>

			<Header />

			<main className={`${styles.main} ${pageClass}`} id="scroll-main" role="main">
				{children}
			</main>

			<Footer />

		</>
	)
}


Layout.propTypes = {
	title: PropTypes.node.isRequired,
	children: PropTypes.node.isRequired,
}
