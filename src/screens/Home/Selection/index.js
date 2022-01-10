import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Selection.module.sass";
import Icon from "../../../components/Icon";
import Loader from "../../../components/Loader";

const Selection = ({ isLoading, movies }) => {
  return (
    <div className={cn("section-pb", styles.section)}>
      <div className={cn("container", styles.container)}>
      <div className={styles.head}>
            <div className={styles.stage}>
              The only movie platform you need
            </div>
            <h2 className={cn("h2", styles.title)}>
              Welcome to Dept Movie Repository
            </h2>
            <Link className={cn("button-stroke", styles.button)} to="/search">
              Click here to start your search
            </Link>
          </div>
          <div className={styles.stage}>Popular</div>
            <div className={styles.substage}>Movies</div>
        <div className={styles.row}>
          {!isLoading ? movies.map(
              (x, index) =>
                  <div className={styles.col}> <Link className={styles.item} to={`/movie/${x.id}/`} key={index}>
                    <div className={styles.preview}>
                      <img
                        src={x.image}
                        alt="Movie"
                      />
                    </div>
                    <div className={styles.description}>
                      <div className={styles.title}>{x.title}</div>
                      <div className={styles.line}>
                        <div className={styles.imDbRating}>Rating {x.imDbRating}</div>
                        <div className={styles.content}>{x.imDbRatingCount}</div>
                      </div>
                      <button
                        className={cn(
                          "button-stroke button-small",
                          styles.button
                        )}
                      >
                        View Details
                      </button>
                    </div>
                  </Link> </div>
            ) : <Loader className={styles.loader} /> }
        </div>
      </div>
    </div>
  );
};

export default Selection;
