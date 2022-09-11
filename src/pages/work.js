import { Global } from '@emotion/react'
import React from 'react'
import ProjectHeader from '../components/work/Header'
import Layout from './layout'

export default function Work() {
  return (
    <div>
      <Layout>
        <Global/>
        <ProjectHeader/>
      </Layout>
    </div>
  )
}
