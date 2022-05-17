import React from 'react';
import Rank from './Rank'

function LeaderBoard() {
	return (
		<div className="text-center mt-50">
			<div>
				<div>
					<button data-testid="route-rank" className='outlined' type="button">Rank</button>
					<button data-testid="route-name" className='outlined' type="button">Name</button>
					<button data-testid="route-points" className='outlined' type="button">Points</button>
					<button data-testid="route-age" className='outlined' type="button">Age</button>
				</div>
			</div>

      <Rank/>
		</div>
	);
}

export default LeaderBoard;
