import React from "react";
import { useEffect, useContext } from "react";
import ShowsContext from "../context/shows/showscontext";
import Loader from "../components/Loader";

const SinglePage = ({ match }) => {
  const { getSingleShow, singleShow, loading } = useContext(ShowsContext);
  useEffect(() => {
    getSingleShow(match.params.id);

    //eslint-disable-next-line
  }, []);

  const removeTags = (text) => {
    if (text === null || text === "") {
      return false;
    } else {
      text = text.toString();
    }
    return text.replace(/(<([^>]+)>)/gi, "");
  };

  return (
    <>
      {loading ? (
        <Loader className="loader" />
      ) : (
        <div className="singleshow">
          <img
            src={
              singleShow.image
                ? singleShow.image.medium
                : "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftineye.com%2Fimageurl&psig=AOvVaw0RHT_V5tAmBcNCM7EuTvW3&ust=1622970357744000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMCEsfORgPECFQAAAAAdAAAAABAD"
            }
            alt={singleShow.name}
          />
          <div className="singleshow_info">
            <h1>{singleShow.name}</h1>
            {singleShow.genres &&
              singleShow.genres.map((genre) => (
                <span key={genre} className="singleshow_genre">
                  {genre}
                </span>
              ))}

            <p>
              <strong>Status:</strong>
              {singleShow.status && singleShow.status}
            </p>
            <p>
              <strong>Rating:</strong>
              {singleShow.rating ? singleShow.rating.average : "No rating"}
            </p>
            <p>
              <strong>Official Site:</strong>
              {singleShow.officialSite ? (
                <a
                  href={singleShow.officialSite}
                  target="_blank"
                  rel="noreferrer"
                >
                  {singleShow.officialSite}
                </a>
              ) : (
                "No official site"
              )}
            </p>
            <p>{singleShow.summary && removeTags(singleShow.summary)}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default SinglePage;
