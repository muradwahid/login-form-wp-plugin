import Form from './Components/Form/Form';
import './style.scss';

import Style from './Components/Style/Style';

import { createRoot } from 'react-dom/client';
// Block Name
function FrontEnd({ attributes, nonce }) {


	return (
		<>
			<Form attributes={attributes} nonce={nonce} />
			<Style attributes={attributes} />
		</>

	);
}

const container = document.querySelectorAll('.wp-login-lgfr-form');

container?.forEach(ele => {
	const attributes = JSON.parse(ele.dataset.attributes);
	const nonce = ele.dataset.nonce;
	const root = createRoot(ele);
	root.render(<FrontEnd attributes={attributes} nonce={nonce} />);
	ele?.removeAttribute("data-attributes");
})