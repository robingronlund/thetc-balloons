import { Maybe } from "graphql/jsutils/Maybe";
import React, { useState } from "react";
import {
  BalloonConnection,
  BalloonEdge,
  Color,
  FilterInput,
  Variant,
} from "../../queries/autogenerate/schemas";
import { BalloonItem } from "../balloon-item";

import styles from "./balloon-items-list.module.scss";

interface props {
  balloons: BalloonConnection;
  previousPage: (e: Maybe<string> | undefined) => void;
  nextPage: (e: Maybe<string> | undefined) => void;
  filter: (e: Maybe<FilterInput> | undefined) => void;
}

export const BalloonItemsList: React.FC<props> = ({
  balloons,
  previousPage,
  nextPage,
  filter,
}) => {
  const { edges, pageInfo } = balloons;
  const [variantState, setVariant] = useState<Maybe<Variant> | undefined>();
  const [colorState, setColor] = useState<Maybe<Color> | undefined>();

  const filterVariant = (variant: string) => {
    const selectedVaraint: Variant = variant as Variant;
    setVariant(selectedVaraint);
    filter({ color: colorState, variant: selectedVaraint });
  };

  const filterColor = (color: string) => {
    const selectedColor: Color = color as Color;
    setColor(selectedColor);
    filter({ color: selectedColor, variant: variantState });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.filterWrapper}>
        <select
          value={variantState?.toString()}
          onChange={(e) => filterVariant(e.target.value)}
          defaultValue={variantState?.toString()}
        >
          <option value="" defaultValue="hello">
            Select a variant for filter
          </option>
          {Object.keys(Variant).map((key) => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
        </select>
        <select
          value={colorState?.toString()}
          onChange={(e) => filterColor(e.target.value)}
          defaultValue={colorState?.toString()}
        >
          <option value="" defaultValue="hello">
            Select a color for filter
          </option>
          {Object.keys(Color).map((key) => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
        </select>
      </div>
      <ul className={styles.list}>
        {edges.map((balloon: BalloonEdge) => (
          <li className={styles.item} key={balloon.cursor}>
            <BalloonItem node={balloon.node} cursor={balloon.cursor} />
          </li>
        ))}
      </ul>
      <div className={styles.navWrapper}>
        {pageInfo.hasPreviousPage ? (
          <button
            className={`buttonPrimary ${styles.button}`}
            onClick={() => previousPage(pageInfo.startCursor)}
          >
            <i className="material-icons">keyboard_arrow_left</i>
            Previous page
          </button>
        ) : (
          <div></div>
        )}

        {pageInfo.hasNextPage ? (
          <button
            className={`buttonPrimary ${styles.button}`}
            onClick={() => nextPage(pageInfo.endCursor)}
          >
            Next page
            <i className="material-icons">keyboard_arrow_right</i>
          </button>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};
