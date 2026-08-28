import React from 'react'
import PricingPlans from './PricingPlans'
import Features from  './Features'
import PricingTable from './PricingTable'
import Enterprises from './Enterprises'
import Payments from './Payments'
import Customer from './Customers'
import HeroSection from './HeroSection'

function Pricing() {
  return (
    <div>
       <PricingPlans/>
       <Features/>
       <PricingTable/>
       <Enterprises/>
       <Payments/>
       <Customer/>
       <HeroSection/>
    </div>
  )
}

export default Pricing