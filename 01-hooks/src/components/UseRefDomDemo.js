import React from 'react';

const STARSHIPS = ["CR90 corvette","Star Destroyer","Sentinel-class landing craft","Death Star","Millennium Falcon","Y-wing","X-wing","TIE Advanced x1","Executor","Rebel transport","Slave 1","Imperial shuttle","EF76 Nebulon-B escort frigate","Calamari Cruiser","A-wing","B-wing","Republic Cruiser","Droid control ship","Naboo fighter","Naboo Royal Starship","Scimitar","J-type diplomatic barge","AA-9 Coruscant freighter","Jedi starfighter","H-type Nubian yacht","Republic Assault ship","Solar Sailer","Trade Federation cruiser","Theta-class T-2c shuttle","Republic attack cruiser","Naboo star skiff","Jedi Interceptor","arc-170","Banking clan frigte","Belbullab-22 starfighter","V-wing"];

const UseRefDomDemo = () => {
	return (
		<>
			<h2 className="text-center mb-2">Search Starship</h2>

			<form>
				<div className="form-group">
					<input type="text" className="form-control" placeholder="Type to search" />
				</div>

				<div className="text-center">
					<button className="btn btn-primary">Focus</button>
					<button className="btn btn-success" type="submit">Search</button>
				</div>
			</form>

			<div className="mt-3">
				<p>Search for QWERTY resulted in the following matches:</p>

				<ul className="search-results">
					<li>Result 1</li>
					<li>Result 2</li>
					<li>Result 3</li>
				</ul>
			</div>
		</>
	);
}

export default UseRefDomDemo;
