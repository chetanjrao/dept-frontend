import React, { useEffect, useState } from "react";
import cn from "classnames";
import styles from "./Search.module.sass";
import { Range, getTrackBackground } from "react-range";
import Loader from '../../components/Loader'
import Icon from "../../components/Icon";
import Card from "../../components/Card";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { SEARCH_LOADING } from "../../redux/search/actions/actions";
import { useLocation } from "react-router";

const Search = (props) => {
  const dispath = useDispatch();
  const url = useLocation().search;
  const [search, setSearch] = useState("");

  useEffect(() => {
    setSearch(new URLSearchParams(url).get("title"))
    if(search && search.length){
      dispath({ type: SEARCH_LOADING, title: search })
    }
  }, [url, dispath])

  const handleSubmit = (e) => {
    e.preventDefault();
    if(search && search.length){
      dispath({ type: SEARCH_LOADING, title: search })
    }
  };

  return (
    <div className={cn("section-pt80", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.top}>
          <div className={styles.title}>Type your keywords</div>
          <form
            className={styles.search}
            action=""
            onSubmit={(e) => handleSubmit(e)}
          >
            <input
              className={styles.input}
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              name="search"
              placeholder="Search ..."
              required
            />
            <button className={styles.result}>
              <Icon name="search" size="16" />
            </button>
          </form>
        </div>
        <div className={styles.row}>
          <div className={styles.wrapper}>
           {!props.isSearchLoading ? <div className={styles.list}>
              {Object.values(props.results).map((x, index) => (
                <Card className={styles.card} item={x} key={index} />
              ))}
              {((!search || !search.length) || !props.isSearchLoading || props.results[0]) ? <button className={cn("button-stroke", styles.button)}>
                Start your search 
              </button> : <></>}
            </div> : <div className={styles.btns}>
              <button className={cn("button-stroke", styles.button)}>
                {search && search.length > 0 ? <Loader /> : <>Start your search</>}
              </button>
            </div> }
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  ...state.search
})

export default connect(mapStateToProps)(Search);
