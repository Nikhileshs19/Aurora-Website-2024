import React from 'react'
import Title_Stuff from './Title_Stuff'
import TimelineEvents from './timeline/TimelineEvents'

export default function Events() {
  return (
    <div>
      <Title_Stuff name={"events"} />
      <div>
        <TimelineEvents/>
      </div>
      
    </div>
  )
}