'use client'

import React, { useState } from 'react'
import Loading from './components/Loading'
const url = 'https://course-api.com/react-tours-project'
const page = () => {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  const fetchTours = async() => {
    setLoading(true)
    const res = await fetch(url)
    const tours = await fetch.json()
  }
  return (
    <div>
      <Loading />
    </div>
  )
}

export default page