import React, { useContext } from "react";
import Searchbar from "../components/Searchbar";
import ListItem from "../components/ListItem";
import Loader from "../components/Loader";

//content
import ShowsContext from "../context/shows/showscontext";

const Homepage = () => {
  const showsContext = useContext(ShowsContext);

  const { loading, shows } = showsContext;

  return (
    <div className="homepage">
      <Searchbar />
      {loading ? (
        <Loader />
      ) : (
        <div className="homepage_list">
          {shows.map((item) => (
            <ListItem
              key={item.show.id}
              id={item.show.id}
              image={
                item.show.image ? item.show.image.medium : "No image found"
              }
              name={item.show.name}
              rating={
                item.show.rating.average
                  ? item.show.rating.average
                  : "no rating"
              }
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Homepage;
