import React, {useEffect} from 'react'

// Components
import MainLayout from "../../layouts/MainLayout";
import IndustryShowcase from "./IndustryShowcase";
import IndustrySolution from "./IndustrySolution";
import IndustryWhatWeDo from "./IndustryWhatWeDo";
import IndustryWhatWeOffer from "./IndustryWhatWeOffer";

const Industry = () => {
	useEffect(() => {
		document.title = 'BTS.id - Industries'
	}, [])

	return (
		<MainLayout>
			<IndustryShowcase />
			<IndustrySolution />
			<IndustryWhatWeDo />
			<IndustryWhatWeOffer />
		</MainLayout>
	)
}

export default Industry