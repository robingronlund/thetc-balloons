import { Maybe } from 'graphql/jsutils/Maybe'
import React from 'react'
import { BalloonConnection, BalloonEdge } from '../../queries/autogenerate/schemas'
import { BalloonItem } from '../balloon-item'

import styles from './balloon-items-list.module.scss'

interface props {
  balloons: BalloonConnection
  previousPage: (e: Maybe<string> | undefined) => void
  nextPage: (e: Maybe<string> | undefined) => void
}

export const BalloonItemsList: React.FC<props> = ({balloons, previousPage, nextPage}) => {
  const { edges, pageInfo } = balloons

  return (
    <div className={styles.wrapper}>
      <div className={styles.navWrapper}>
        {
          pageInfo.hasPreviousPage ?
            <button className={`buttonPrimary ${styles.button}`} onClick={() => previousPage(pageInfo.startCursor)}>Previous page</button>
            : <div></div>
        }

        { pageInfo.hasNextPage ?
          <button className={`buttonPrimary ${styles.button}`} onClick={() => nextPage(pageInfo.endCursor)}>Next page</button>
          : <div></div>
        }

      </div>
      <ul className={styles.list}>
        {edges.map((balloon: BalloonEdge) =>
          <li className={styles.item} key={balloon.cursor}>
            <BalloonItem node={balloon.node} cursor={balloon.cursor}/>
          </li>
        )}
      </ul>
    </div>
  )
}
