import React from "react"
import _ from "lodash"
import "../css/Articles.css"
import { Card, CardContent, Grid } from "@material-ui/core"
import { useParams } from "react-router-dom"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { Link } from 'react-router-dom'

let Articles = (props) => {
	let getLink = (link) => {
		return `/article/${link.toLowerCase().replace(/\s/g, '-')}`;
	}
	let { name } = useParams()
	let articles
	let title;
	if (name != undefined) {
		let id = props.tags.find((tag) => tag.name == _.startCase(name)).id
		// console.log(`name: ${name}, id: ${id}, article.tags ${JSON.stringify(props.articles)}`)
		articles = props.articles.filter((article) => article.tags.includes(id))
		title = `Atronandbeyond.com: ${_.startCase(name)}`
	} else {
		articles = props.articles
		title = `Atronandbeyond.com: Beats and Code`
	}
	return (
		<>
			<Helmet>
				<title>{title}</title>
			</Helmet>
			<div className="articleGrid">
				<Grid container spacing={2}>
					{//article is enabled
						articles
							.filter((article) => article.enabled)
							// has at least one tag that is enabled
							.filter((article) => {
								return (
									_.intersection(
										article.tags,
										props.tags
											.filter((tag) => tag.enabled)
											.map((value) => value.id)
									).length > 0
								)
							})
							.map((article, i) => (
								<Grid item lg={6} key={i}>
									<Card className="article">
										<CardContent className="cardContent">
											<h1><Link to={getLink(article.title)}>{article.title}</Link></h1>
											<div className="icon">
												{article.tags.map(
													(articleTag) =>
														_.find(props.tags, (tag) => articleTag == tag.id).icon
												)}
											</div>
											<p
												dangerouslySetInnerHTML={{
													__html: _.truncate(article.content, { length: 250 }),
												}}
											/>
											<div>{article.date}</div>
										</CardContent>
									</Card>
								</Grid>
							))}
				</Grid>
			</div>
		</>
	)
}

export default Articles

Articles.propTypes = {
	articles: PropTypes.array,
	tags: PropTypes.array,
}
