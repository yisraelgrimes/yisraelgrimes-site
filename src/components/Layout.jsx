// Basic page structure
import React from "react"
import PropTypes from "prop-types"

import { Header, Footer, SEO } from "."

import skipStyles from "./skiplink.module.sass"


export function Layout({ title, children }) {
	return (
		<>
			<SEO title={title} />

			{/* Accessibility Skiplink */}
			<a className={skipStyles.container} href="#scroll-main">
					Jump to main content.
			</a>

			<Header />

			<main id="scroll-main" role="main">
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
