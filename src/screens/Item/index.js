import React, { useEffect, useState } from "react";
import cn from "classnames";
import styles from "./Item.module.sass";
import Users from "./Users";
import Options from "./Options";
import { connect, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { INFO_LOADING, TRAILER_LOADING } from "../../redux/item/actions/actions";
import Loader from "../../components/Loader";
import Icon from "../../components/Icon";
import Modal from "../../components/Modal";

const navLinks = ["Star List", "Directors", "Writers"];


const Item = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const dispatch = useDispatch();
  const { movieId } = useParams();
  const [isModalVisible, setModalVisibility] = useState(false);

  useEffect(() => {
    dispatch({ type: INFO_LOADING, id: movieId })
  }, [])



  return (
    <>
     <div className={cn("section", props.isInfoLoading ? "section-loading" : "",styles.section)}>
     {!props.isInfoLoading ?  <div className={cn("container", styles.container)}>
          <div className={styles.bg}>
            <div className={styles.preview}>
              <div className={styles.categories}>
                {(props.info.genreList || []).map((x, index) => (
                  <div
                    className={cn(
                      { "status-purple": true },
                      styles.category
                    )}
                    key={index}
                  >
                    {x.value}
                  </div>
                ))}
              </div>
              <img
                src={props.info.image}
                alt="Item"
              />
            </div>
            <Options className={styles.options} />
          </div>
          <div className={styles.details}>
            <h1 className={cn("h3", styles.title)}>{props.info.title}</h1>
            <div className={styles.cost}>
              <div className={cn("status-stroke-green", styles.rating)}>
              <Icon name="star" fill={'#45B26B'} /> {props.info.imDbRating} / 10
              </div>
              <div className={styles.counter}>{props.info.imDbRatingVotes} Votes</div>
            </div>
            <div className={styles.info}>
              {(props.info.plot || '').slice(0, 200)}...
            </div>
            <div className={styles.nav}>
              {navLinks.map((x, index) => (
                <button
                  className={cn(
                    { [styles.active]: index === activeIndex },
                    styles.link
                  )}
                  onClick={() => setActiveIndex(index)}
                  key={index}
                >
                  {x}
                </button>
              ))}
            </div>
            {activeIndex === 0 ? <Users className={styles.users} items={(props.info.starList || []).map(v => ({
              name: v.name,
              position: props.actors[v.id] ? props.actors[v.id].asCharacter : '',
              avatar: props.actors[v.id] ? props.actors[v.id].image : ''
            }))} /> : <></> }
            {activeIndex === 1 ? <Users className={styles.users} items={(props.info.directorList || []).map(v => ({
              name: v.name,
              position: 'Director'
            }))} /> : <></> }
            {activeIndex === 2 ? <Users className={styles.users} items={(props.info.writerList || []).map(v => ({
              name: v.name,
              position: 'Writer'
            }))} /> : <></> }
            <div className={styles.btns}>
              <button
              onClick={() => {
                dispatch({ type: TRAILER_LOADING, id: movieId })
                setModalVisibility(true)
              }}
              className={cn("button", styles.button)}
            >
              View Trailer
            </button>
            <a href={`https://www.imdb.com/title/${movieId}/`} target={"_blank"} rel="noreferrer">
            <button className={cn("button-stroke", styles.button)}>
              View In IMDB
            </button>
            </a>
            </div>
          </div>
          <Modal 
              visible={isModalVisible}
              onClose={(e) => setModalVisibility(false)}>
                <div className={styles.playerWrapper}>
                {!props.isTrailerLoading ? <iframe width="100%" height="480" src={`https://www.youtube.com/embed/${props.trailer.videoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay *; fullscreen *; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> : <Loader className={styles.loader} color={"white"} />}
                </div>
              </Modal>
        </div> : <Loader className={styles.loader} /> }
      </div> 
    </>
  );
};

const mapStateToProps = (state) => ({
  ...state.item
})

export default connect(mapStateToProps)(Item);
