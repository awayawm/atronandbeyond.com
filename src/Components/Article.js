import React from "react"
import PropTypes from "prop-types"
import { useParams } from "react-router-dom"
import "../css/Article.css"
import { Helmet } from "react-helmet"
import ArticlePaper from "../Styles/AritclePaper"

let Article = (props) => {
	let { name } = useParams()
	let article = props.articles.find((article) => article.link == name)
	// console.log(`name ${name}, articles: ${JSON.stringify(article)}`)
	return (
		<>
			<Helmet>
				<title>Atronandbeyond.com: {article.title}</title>
			</Helmet>
			<ArticlePaper className="paper-article">
				<h1>{article.title}</h1>
				<p
					dangerouslySetInnerHTML={{
						__html: article.content,
					}}
				/>
			</ArticlePaper>
		</>
	)
}

export default Article

Article.propTypes = {
	articles: PropTypes.array,
	tags: PropTypes.array,
}
