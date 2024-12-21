import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/Hero.JSX'
import HomeCards from './components/HomeCards'
import JobListings from './components/JobListings'
import ViewAllJobs from './ViewAllJobs'

const App = () => {
  return (
    <>
    <Navbar />
    <Hero title='Frazbear the dev' subtitle='This the most amazing pizza' />
    <HomeCards />
    <JobListings />
    <ViewAllJobs />
    </>
  )
}

export default App