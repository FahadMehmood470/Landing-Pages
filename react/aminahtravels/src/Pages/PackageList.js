import React from 'react'
import UmrahPackageFilterSection from '../Components/UmrahPackageFilterSection'
import CardsList from '../Components/CardsList'
import PilgrimJourneyWithBg from '../Components/PilgrimJourneyWithBg'
import InquiryForm from '../Components/InquiryForm'
import ReachUsCards from '../Components/ReachUsCards'
import Navbar from '../Components/Navbar'

function PackageList() {
    return (
        <>
            <Navbar/>
            <UmrahPackageFilterSection />
            <CardsList />
            <CardsList />
            <CardsList />
            <PilgrimJourneyWithBg />
            <InquiryForm />
            <ReachUsCards />
        </>
    )
}

export default PackageList