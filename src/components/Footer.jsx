import React from "react"
import { Link } from "gatsby"

import styles from "./footer.module.sass"


export function Footer() {

	return (
		<footer className={styles.footer}>
			<section>
				Built with &#9825; by Yisrael Grimes. <br />Powered by Coffee and
				{` `}
				<a href="https://www.gatsbyjs.org"> Gatsby</a>.
				| Get in <a href="https://twitter.com/grimesclassic"> touch</a>.
			</section>
		</footer>
	)
}
