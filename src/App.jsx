import DisclosureShowHide from './components/DisclosureShowHide';

const App = () => {
	return (
		<main>
			<h1>React - Disclosure (Show/Hide) Component</h1>

			<DisclosureShowHide
				headingLevel="2"
				headingText="Heading Level 2"
			>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel itaque libero officia, fugit animi adipisci ipsa, consequuntur vero, recusandae sequi labore quibusdam repellat dicta voluptatibus rerum voluptates veritatis ut magni!</p>
			</DisclosureShowHide>
		</main>
	)
};

export default App;