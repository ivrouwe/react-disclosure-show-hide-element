import { useState } from 'react';

const DisclosureShowHide = ({
	children,
	headingText,
	headingLevel = '2',
	ariaExpanded = 'false',
}) => {	
	if (!headingText) {
		return;
	}

	const [currentAriaExpanded, setCurrentAriaExpanded] = useState(ariaExpanded);

	const [svgPathD, setSvgPathD] = useState('m 0 0 L 5 5 L 10 0 Z');

	const [hidden, setHidden] = useState(true);

	const allowedHeadingLevels = [
		'1',
		'2',
		'3',
		'4',
		'5',
		'6',
	];

	let HeadingTag;

	if (
		headingLevel
		&& allowedHeadingLevels.includes(headingLevel)
	) {
		HeadingTag = `h${headingLevel}`;
	} else {
		HeadingTag = 'h2';
	}

	function handleClick() {
		switch (currentAriaExpanded) {
			case 'false':
				setCurrentAriaExpanded('true');
				setSvgPathD('M 10 5 L 5 0 L 0 5 Z');
				setHidden(false);

				break;
			case 'true':
				setCurrentAriaExpanded('false');
				setSvgPathD('m 0 0 L 5 5 L 10 0 Z');
				setHidden(true);
		}
	}

	return (
		<div className="disclosure-show-hide">
			<HeadingTag>
				<button
					type="button"
					aria-expanded={currentAriaExpanded}
					onClick={handleClick}
				>
					<span>{headingText}</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 10 5"
						width="10"
						height="5"
						aria-hidden="true"
					>
						<path
							d={svgPathD}
							fill="currentColor"
						/>
					</svg>
				</button>
			</HeadingTag>

			<div hidden={hidden}>
				{children}
			</div>
		</div>
	);
};

export default DisclosureShowHide;