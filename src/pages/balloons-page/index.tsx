import React, { useMemo } from 'react'
import { RouteComponentProps } from "@reach/router";

import { BalloonItemsList } from '../../components/balloon-items-list'
import { AppLayout } from '../../layout/app-layout'

import * as api from '../../data/balloons.json'

interface Balloon {
  id: string
  name: string
  imageUrl: string
  description: string
  color: string
  variant: string
  price: number
  availableSince: string
  cursor: string
}

export const BalloonsPage: React.FC<RouteComponentProps> = (props) => {
  const balloons: Balloon[] = useMemo(() => api.balloons, [])

  return(
    <AppLayout title="Balloon store">
      <BalloonItemsList balloons={balloons}/>
    </AppLayout>
  )
}
