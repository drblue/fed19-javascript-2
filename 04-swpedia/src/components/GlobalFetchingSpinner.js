import React from 'react';
import SyncLoader from 'react-spinners/SyncLoader';
import { useIsFetching } from 'react-query';

const GlobalFetchingSpinner = () => {
	const isFetching = useIsFetching();

	return isFetching ? (
			<div className="fetching-spinner">
				<SyncLoader color={"#888"} size={10} />
			</div>
		) : null;
}

export default GlobalFetchingSpinner;
