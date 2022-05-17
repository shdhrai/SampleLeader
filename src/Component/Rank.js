import React from 'react';
import { response } from '../response';

function ncard(val,ind){
   
   <Card 
     rank={val.rank}
    />
}


function Card(props){
  const { rank, name, points, age} = list;
  return(
    <>
    <tbody data-testid="app-tbody">
    <tr key={rank}>
							<td data-testid={`rank-${index}`}>{rank}</td>
							<td data-testid={`name-${index}`}>{name}</td>
							<td data-testid={`points-${index}`} className="numeric">{points}</td>
							<td data-testid={`age-${index}`} className="numeric">{age}</td>
						</tr>
    </tbody>
    </>
  )
}
function Rank(){
  

  return(
    <>
    <div className="card mx-auto pb-20 mb-30" style={{ width: '50%' }}>
				<table className="mt-50" data-testid="app-table">
					<thead>
						<tr>
							<th>Rank</th>
							<th>Name</th>
							<th className="numeric">Points</th>
							<th className="numeric">Age</th>
						</tr>
					</thead>
					
						{response.map(ncard)}
					
				</table>
			</div>
    </>
  )
}

export default Rank;