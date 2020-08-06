import React, {useEffect} from 'react'

// Components
import MainLayout from "../../layouts/MainLayout";
import IndustryShowcase from "./IndustryShowcase";
import IndustrySolution from "./IndustrySolution";

const Industry = () => {
	useEffect(() => {
		document.title = 'BTS.id - Industries'
	}, [])

	return (
		<MainLayout>
			<IndustryShowcase />
			<IndustrySolution />
		</MainLayout>
	)
}

export default Industry