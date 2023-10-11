import React from 'react';

function Icon({ name }: { name: string }): JSX.Element {
	return (
		<i className={name}>
			<span className="path1" />
			<span className="path2" />
			<span className="path3" />
			<span className="path4" />
			<span className="path5" />
			<span className="path6" />
			<span className="path7" />
			<span className="path8" />
			<span className="path9" />
			<span className="path10" />
		</i>
	);
}

export default Icon;
