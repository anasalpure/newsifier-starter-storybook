import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faOStar } from "@fortawesome/free-regular-svg-icons";
import { faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { IReviewViewProps } from "../../lib/models";

export const Review = ({ topRate = 7, rate = 0 }: IReviewViewProps) => {
  const roundedRate = Math.abs(Math.floor(rate));
  const partialRate = rate - roundedRate > 0 ? 1 : 0;
  const restRate = topRate - roundedRate - partialRate;
  if (!roundedRate) return <></>;
  return (
    <>
      {new Array(roundedRate).fill(1).map((v, i) => (
        <FontAwesomeIcon key={i} icon={faStar} />
      ))}
      {partialRate ? <FontAwesomeIcon icon={faStarHalfStroke} /> : ""}
      {new Array(restRate).fill(1).map((v, i) => (
        <FontAwesomeIcon key={i} icon={faOStar} />
      ))}
    </>
  );
};
