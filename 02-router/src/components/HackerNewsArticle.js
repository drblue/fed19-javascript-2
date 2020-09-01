import React, { useState, useEffect, useRef } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Moment from 'react-moment';
import useFetch from '../hooks/useFetch';

const HackerNewsArticle = (props) => {

	const [{ data, isLoading, error }, setUrl] = useFetch('');
	const history = useHistory();
	const { articleId } = useParams();
	console.log('Props:', props);
	console.log('articleId param:', articleId);

	useEffect(() => {
		// fetch article from Hacker News API
		if (!articleId) {
			return;
		}

		setUrl(`https://hn.algolia.com/api/v1/items/${articleId}`);
	}, []);

	return (
		<article className="mt-3">
			{
				isLoading ? (
					<h2>Loading...</h2>
				) : (
					error ? (
						<div className="alert alert-warning">
							Bollocks. Something bad happened. Tea?

							<p className="small">{error}</p>
						</div>
					) : (
						data ? (
							<>
								<h1 className="h2">{data.title}</h1>

								<div className="meta">
									<dl className="row">
										<dt className="col-sm-3">Author</dt>
										<dd className="col-sm-9">{data.author}</dd>

										<dt className="col-sm-3">Posted</dt>
										<dd className="col-sm-9">
											<Moment unix format="YYYY-MM-DD hh:mm:ss">{data.created_at_i}</Moment> (<Moment unix fromNow>{data.created_at_i}</Moment>)
										</dd>

										<dt className="col-sm-3">Points</dt>
										<dd className="col-sm-9">{data.points}</dd>
									</dl>
								</div>

								<div className="content" dangerouslySetInnerHTML={{ __html: data.text }}></div>

								<button onClick={() => history.goBack()} className="btn btn-primary">&laquo; Go back (to where you came from)</button>
							</>
						) : ''
					)
				)
			}
		</article>
	)
}

export default HackerNewsArticle;
