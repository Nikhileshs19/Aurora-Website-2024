import React from 'react'
import { Auroractf } from './Auroractf'
import DevsprintEvents from './DevsprintEvents'
import Timeline from './timeline/Timeline'

export default function Events() {
  return (
    <div className='bg-[#000509]'>
      <h1 className='text-center'>EVENTS</h1>

      <Timeline/>

      <DevsprintEvents/>

      <Auroractf/>
    </div>
  )
}
