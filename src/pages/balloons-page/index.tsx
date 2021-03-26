import React from 'react'
import { RouteComponentProps } from "@reach/router";

import { BalloonsList } from '../../components/balloons-list'
import { AppLayout } from '../../layout/app-layout'

export const BalloonsPage: React.FC<RouteComponentProps> = (props) => {

  return(
    <AppLayout>
      <BalloonsList />
    </AppLayout>
  )
}
