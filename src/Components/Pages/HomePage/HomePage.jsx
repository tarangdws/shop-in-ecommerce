import React from 'react'
import BannerSection from './BannerSection'
import BannerBelowCard from './BannerBelowCard'
import SupportSeller from './SupportSeller'
import HandPickedItems from './HandPickedItems'
import FilterProductSection from './FilterProductSection'
import NewsLetter from '../../General/NewsLetter'

const HomePage = () => {
  return (
    <>
    <div className='container !pt-0'>
      <BannerSection />
      <BannerBelowCard />
      <SupportSeller />
      <HandPickedItems />
      <FilterProductSection />
      <NewsLetter />
    </div>
    </>
  )
}

export default HomePage