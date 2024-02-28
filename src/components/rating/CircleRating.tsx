import React, { FC } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./circleRating.scss";
interface CircleRatingProps {
    rating: string;
}
const CircleRating: FC<CircleRatingProps> = ({ rating }) => {
    return (
        <div className="circleRating" data-testid="circle-rating">
            <CircularProgressbar
                value={+rating}
                maxValue={10}
                text={rating}
                styles={buildStyles({
                    pathColor:
                        rating < "5" ? "red" : rating < "7" ? "orange" : "green",
                })}
            />
        </div>
    );
};
export default CircleRating;