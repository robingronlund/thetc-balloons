import React, { useState } from "react";
import { RouteComponentProps } from "@reach/router";
import { useBalloonsQuery } from "../../queries/autogenerate/hooks";
import { Maybe } from "graphql/jsutils/Maybe";
import {
  Color,
  FilterInput,
  Variant,
} from "../../queries/autogenerate/schemas";

import { BalloonItemsList } from "../../components/balloon-items-list";
import { ErrorPage } from "../error-page";
import { AppLayout } from "../../layout/app-layout";

import "../../styles/components/spinner.scss";

export const BalloonsPage: React.FC<RouteComponentProps> = () => {
  const [afterCursor, setAfterCursor] = useState<Maybe<string> | undefined>();
  const [beforeCursor, setBeforeCursor] = useState<Maybe<string> | undefined>();
  const [filter, setFilter] = useState<Maybe<FilterInput> | undefined>();
  const [response] = useBalloonsQuery({
    variables: {
      before: beforeCursor,
      after: afterCursor,
      filter: {
        color: filter?.color?.toUpperCase() as Color,
        variant: filter?.variant?.toUpperCase() as Variant,
      },
    },
  });

  if (response.error) return <ErrorPage></ErrorPage>;

  const fetchNext = (cursor: Maybe<string> | undefined) => {
    setBeforeCursor(undefined);
    setAfterCursor(cursor);
  };

  const fetchPrevious = (cursor: Maybe<string> | undefined) => {
    setAfterCursor(undefined);
    setBeforeCursor(cursor);
  };

  const filterBalloons = (filter: Maybe<FilterInput> | undefined) => {
    setFilter(filter);
  };

  return (
    <AppLayout title="Balloon store">
      {response.fetching ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        <BalloonItemsList
          balloons={response.data?.balloons!}
          nextPage={(cursor) => fetchNext(cursor)}
          previousPage={(cursor) => fetchPrevious(cursor)}
          filter={(filter) => filterBalloons(filter)}
        />
      )}
    </AppLayout>
  );
};
