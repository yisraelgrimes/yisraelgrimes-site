import React from "react"
import { graphql } from 'gatsby'

import { Layout, Img } from "../components"


export default function MePage({ data }) {

	return (
		<Layout title="About Me">
			<header>
				<h1>About Me</h1>
			</header>

			<p>
				<Img className="about-me-img" image={data.yis} alt="Yisrael leaning against a car in the sunlight" />

				In case you haven't figured out by now, my name's Yisrael. It looks a little odd on paper... or screen... I guess, but just pronounce it like the country and you'll be good to go.</p>

			<p>I’m a full-stack developer mainly focused on web technologies used in creating sites and apps. I'm very fond of all things SaaS. The stability of recurring product revenue and not having to constantly churn through projects just to pay the bills seems like a no-brainer to me. I prefer building/improving/reiterating over time instead of rushing to finish something just to do it all again a few weeks later.</p>

			<h3>My Origin Story</h3>
			<p>Every super hero's got one right? I'm not saying I'm a super hero or anything but... I'll just let you assume I am.</p>

			<p>I didn't always want to be a developer, I kind of just fell into it out of necessity. I graduated from Troy University with a degree in Design and a minor in Photography in 2012. The job market in my area was/is pretty abysmal so I started freelancing. I would take pretty much any type of design or photography job that would come along. I was kinda all over the place, which made it really hard to market myself or become very efficient at any one thing. Over time, I was able to narrow down my focus to just design. In an attempt to market my business, I had been hacking away at my WordPress site (not the cool kind of hacking) and fighting to make those drag-and-drop page builders do what I wanted. Once I landed my first website project, I realized this method of "building" websites was not going work for me. Eventually I was able to get familiar enough with WordPress that I could build my own themes, the way I wanted. I learned to code so I could solve my own problems, and once I had a taste of that, I was hooked. </p>

			<p>Fast-forward a bit, I stumble across a video on YouTube about CSS Preprocessors and my mind was blown. This led me to the realization that there's a whole world outsite of WordPress themes and regular ole' CSS so I start playing around with things like SASS, Pug, Node.js, and a ton of other awesome technologies. To be honest, I don't remember the last time I opened a WordPress file.</p>

			<h3>Now</h3>
			<p>I currently run a small agency called IZZI. I promise, the name didn't come from the fact that my name is Yisrael, but people normally think it did. We chose the name because the name because it sounded neat, was unique, and because it visually looked cool. Remember how I started out as a designer? 😬  I'm a sucker for a good <a href='https://en.wikipedia.org/wiki/Palindrome'>palindrome</a>. We build custom websites and apps for small businesses. We are working toward launching our own SaaS product and maybe one day, that will be the majority of what we focus on.</p>

			<p>I live in south Alabama with my wife, Bethany, two headstrong daughters, Haddie and Martha, and an old dog named Eleanor. I'm basically surrounded by girls and I'm ok with that. To say I'm a feminist would be an understatement. haha. We are planning on moving out of the south once my wife finishes midwifery school.</p>

			<h3>Hobbies</h3>
			<p>I have a ton of interests that don't involve a computer. I've always been the kind of person that wants to do all the things. Sometimes this gets me into trouble. I've been playing music for about 16 years and currently play at <a href='https://wiregrasschurch.org/'>Wiregrass Church</a>. I love learning about anything and everything, but I have a bias for math and sciencey things. And lately, I've really been into woodworking. Like, old-school joinery and antique hand tools. There's something calming or refreshing about the idea that you are using the exact same tools and techniques that have been used for generations. Ironically, it's the exact opposite of the thing I love most about development. Haha</p>

		</Layout>
	)
}


export const query = graphql`
	query {
		yis: file(relativePath: { eq: "yisrael-grimes-car.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 500) {
					...GatsbyImageSharpFluid
					...GatsbyImageSharpFluidLimitPresentationSize
				}
			}
		}
	}
`
