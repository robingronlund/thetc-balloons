import React from 'react'
import { Link, RouteComponentProps, useParams } from "@reach/router";
import { useBalloonQuery } from '../../queries/autogenerate/hooks';

import { AppLayout } from '../../layout/app-layout';
import { ErrorPage } from '../error-page';
import { BalloonDetails } from '../../components/balloon-details/index.';

import styles from './balloons-details-page.module.scss'
import '../../styles/components/spinner.scss'

export const BalloonDetailsPage: React.FC<RouteComponentProps> = () => {
  const params = useParams()
  const [response] = useBalloonQuery({variables: {id: params.id}})

  if (response.error) return <ErrorPage></ErrorPage>

  return(
    <AppLayout title={response.data?.balloon?.name} displayNav={true} navTitle="Balloons">
      { response.fetching ?
        <div className="loader-container">
          <div className="loader"></div>
        </div>:
        <BalloonDetails
          id={response.data?.balloon?.id!}
          name={response.data?.balloon?.name!}
          description={response.data?.balloon?.description!}
          imageUrl={response.data?.balloon?.imageUrl!}
          price={response.data?.balloon?.price!}
          color={response.data?.balloon?.color!}
          variant={response.data?.balloon?.variant!}
          availableSince={response.data?.balloon?.availableSince} />
      }
    </AppLayout>
  )
}
