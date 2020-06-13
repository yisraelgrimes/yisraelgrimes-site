import React from "react"
import { graphql } from 'gatsby'

import { Layout, Img } from "../components"



export default function MePage({ data }) {

	return (
		<Layout title="About Me">
			<header>
				<h1>About Me</h1>
			</header>

			<p>In case you haven't figured out by now, my name is Yisrael. It looks a little odd on paper, or screen, I guess, but just pronounce it like the country and you'll be golden.</p>

			<Img image={data.yis} alt="Yisrael leaning against a car in the sunlight" />

			<p>I’m a full-stack designer and a business strategy consultant. I work with overworked and overwhelmed small business owners, start-ups, and entrepreneurs all over the world to figure out how to grow their businesses in the digital space. Most of this work is done through a scrappy little marketing agency I head up called Tube Media Co. If you run a business and are tired of worrying about the marketing or design side of things and just want to get back to doing what you love, then Tube Media is a good place to start.</p>

			ellipses here

			<p>When I was 18 I had an idea for a niche business that catered to the local skateboarding community. It was a great idea, but I knew nothing about business, marketing, or pretty much anything else that you should know if you want to start a business, let alone make it successful. As you can imagine, the business failed, hard. So I re-focused on college and trying to fit in with what everyone else told me I should be doing, the stuff that “successful” people do. But I was never happy filling the typical employee role. I wanted to change and improve the way people do business and my history of employment told me that most people don’t want employees rocking the boat. They wanted content employees that would show up and do what they are told, regardless of how muchÂ room for improvement was available.</p>

			<h2>My Goal</h2>
			<p>My goal is to rock the boat. I focus my energy on digging into your business and getting to the core issues that are holding you back. At my roots, I’m a designer. And I think good design can solve a great deal ofÂ the problems businesses have, but my goal isn’t to just consider design aspects. My experience with running my own business and helping other businesses allows me to look at the bigger picture. My goal isn’t to just make pretty websites if that’s not what your business needs. My goal is to solve problems. My goal is to help your business be successful. If the solution is a new website, awesome! If itâ€™s something else, thatâ€™s awesome too! Thereâ€™s no such thing as a one size fits all solution.</p>

			<h2>I'm Not a "Yes Man"</h2>
			<p>If you're looking for someone to blindly agree with you, then I encourage you to look somewhere else. I'm not going to just tell you what you want to hear. The only thing this produces is self-gratification, not lasting business success.</p>

			<h2>Know How</h2>
			<p>I have degrees in Design and Photography, and have been running businesses pretty much my entire adult life. On an average day, I spend more time reading about, thinking about, and discovering the best ways to grow a business online than the average person spends sleeping, or watching tv. For those in the room wondering, that's a lot of time.</p>

			<h2>My Idea of Success</h2>
			<p>Success to me is where Iâ€™m invisible. Success is where your marketing problems are not keeping you up at night or when you can enjoy your Saturday with your family and know that your business is ok. Success is where you can focus on doing the thing you love. Success is where the money you pay me is only a drop in the bucket compared to how much additional money you are makingâ€”or savingâ€”by working with me. Success is helping my clients win loyal customers that promote their businesses for them!</p>

			<h2>Other Fish in the Sea</h2>
			<p>When I first started out, I would take on any client that would hire me. This was a bad idea. I ended up working on projects that weren’t a good fit or that I didn’t care a whole lot about. This is an actual quote from my old websiteâ€¦</p>

			<blockquote>I've worked with clients as large as Sony Pictures and as small as new-born babies, so your project is probably the right size!</blockquote>

			<p>You might have seen something like this before. Or maybe youâ€™ve even worked with someone who took the â€œone size fits allâ€ approach. I may not be the right person for the job, and you may not be the right client for me. Thatâ€™s ok, there are more fish in the sea. We need to work well together, and you need to trust that I know what I’m doing (most of the time) and I have your best interest in mind. I do my best work when I’m losing sleep because I’m thinking of ways to improve your business. If I canâ€™t create something for you that will sing, then Iâ€™m not going to waste your valuable time.</p>

			<p>And even if we donâ€™t end up working together, I would still love to have a conversation about your project. I may even be able to point you in the right direction towards someone who will be better suited for your job.</p>

		</Layout>
	)
}


export const query = graphql`
  query {
    yis: file(relativePath: { eq: "yisrael-grimes-car.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
					...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
  }
`
