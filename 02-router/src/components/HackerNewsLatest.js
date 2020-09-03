import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const HackerNewsLatest = () => {
	const [{ data, isLoading, error }, setUrl] = useFetch('');

	useEffect(() => {
		setUrl(`https://hn.algolia.com/api/v1/search?tags=front_page`);
	}, []);

	const renderArticles = hits => {
		return hits.map((article, index) => (
			<li key={index} className="list-group-item">
				<h3>{article.title}</h3>

				<p className="text-muted small">
					Posted at {article.created_at} by {article.author}
				</p>

				<p>
					<Link to={{
						pathname: `/articles/${article.objectID}`,
						state: {
							article,
						},
					}} className="btn btn-sm btn-primary">Read more</Link>
				</p>
			</li>
		))
	}

	return (
		<>
			<h2>Latest articles</h2>

			<p>Can't find something interesting? Try <Link to='/search'>searching</Link>!</p>

			<div className="mt-3">
				{
					isLoading ? (
						<h2 className="text-center">Loading...</h2>
					) : (
						error ? (
							<div className="alert alert-warning">
								Bollocks. Something bad happened. Tea?

								<p className="small">{error}</p>
							</div>
						) : (
							data && data.hits ? (
								<>
									<ul className="latest-articles list-group">
										{renderArticles(data.hits)}
									</ul>
								</>
							) : ''
						)
					)
				}

			</div>
		</>
	);
}

export default HackerNewsLatest;
