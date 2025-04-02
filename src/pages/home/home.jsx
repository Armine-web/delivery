import React, { useState } from 'react'
import './home.css'
import Header from '../../components/header/header'
import ExploreMenu from '../../components/exploreMenu/exploreMenu'
import FoodDisply from '../../components/foodDisply/foodDisply'
import AppDownLoad from '../../components/appDownLoad/appDownLoad'


const Home = () => {
    const [category, setCategory] = useState('All');
  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisply category={category}/>
      <AppDownLoad />
    </div>
  )
}

export default Home
