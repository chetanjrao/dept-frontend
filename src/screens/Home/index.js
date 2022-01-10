import React, { useEffect } from "react";
import Selection from "./Selection";
import Popular from "./Popular";
import { POPULAR_LOADING } from "../../redux/home/actions/actions";
import { connect, useDispatch } from "react-redux";

const Home = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: POPULAR_LOADING })
  }, [])

  return (
    <>
      <Selection isLoading={props.isPopularLoading} movies={props.popularMovies.slice(0, 5)} />
      <Popular />
    </>
  );
};

const mapStateToProps = (state) => ({
  ...state.home
})

export default connect(mapStateToProps)(Home);
