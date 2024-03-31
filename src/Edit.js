import { useEffect, Fragment, useState } from 'react';
import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor'
import Form from './Components/Form/Form';
import Settings from './Components/Settings/Settings';
import Style from './Components/Style/Style';
import Styles from './Components/Settings/Styles';
import { TabPanel } from './Components/Panel/TabPanel/TabPanel';

const Edit = props => {
	const { className, setAttributes, clientId, attributes } = props;
	const [tab, setTab] = useState("content");
	const { cId } = attributes;
	useEffect(() => { clientId && setAttributes({ cId: clientId.substring(0, 10) }); }, [clientId]); // Set & Update clientId to cId

	return (
		<Fragment>
			<InspectorControls>
				<TabPanel value={tab} onChange={(value)=>setTab(value)}/>
			</InspectorControls>
			<InspectorControls>
				{tab === "content" && <Settings attributes={attributes} setAttributes={setAttributes} />}
				{tab === "style" && <Styles attributes={attributes} setAttributes={setAttributes} />}
			</InspectorControls>

			<Fragment>
				<Style attributes={attributes} />
				<div className={className} id={`lgfr-login-form-${cId}`}>
					<Form attributes={attributes} />
				</div>
			</Fragment>
		</Fragment>
	);
};
export default Edit;