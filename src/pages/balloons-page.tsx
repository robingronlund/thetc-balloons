import React from 'react'
import { BalloonsList } from '../components/balloons-list/balloons-list'
import { AppLayout } from '../layout/app-layout/app-layout'

export const BalloonsPage: React.FC = () => {
  return(
    <AppLayout>
      <div>
        <BalloonsList />
      </div>
    </AppLayout>
  )
}
