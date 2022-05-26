//this component called CATS will read from our Redux store
import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {fetchCats} from "./catsSlice";
import CatList from "./CatList";

function Cats() {
  const catPics = useSelector((state) => state.entities);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCats());
  }, []);

  return (
    <div>
      <h1>CatBook</h1>
      {/* add CatList component here */}
      <CatList catPics={catPics} />
    </div>
  );
}

export default Cats;
