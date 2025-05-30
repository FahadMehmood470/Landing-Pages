import React from 'react'
import Navbar from '../Components/Navbar'
import UmrahPackageInfo from '../Components/UmrahPackageInfo'
import FeatureHighlights from '../Components/FeatureHighlights'
import PopularPackagesSection from '../Components/PopularPackagesSection'
import InquiryForm from '../Components/InquiryForm'
import ReachUsCards from '../Components/ReachUsCards'

function UmrahPackageDetails() {
    return (
        <>
            <Navbar />
            <UmrahPackageInfo />
            <FeatureHighlights />
            <PopularPackagesSection />
            <InquiryForm />
            <ReachUsCards />
        </>
    )
}

export default UmrahPackageDetails