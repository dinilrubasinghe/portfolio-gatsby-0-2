import React from 'react'
import Layout from "./layout"
import Header from '../components/about/Header'
import About from '../components/about/about-sec'
import Skills from '../components/about/about-skills'


export default function about () {
  return (
    <Layout>
      <Header/>
      <About/>
      <Skills/>
    </Layout>
  )
}
