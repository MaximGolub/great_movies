import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  updateFavoritesMovies,
  removeFromFavoritesMovies,
  fetchDescriptionMovie,
} from "../store";

export const MovieCard = ({ id, title, description, image }) => {
  const { favoritesMovies } = useSelector((state) => state.movies);
  const [favorites, setFavorites] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    favoritesMovies.map((item) => item.id).includes(id)
      ? setFavorites(true)
      : setFavorites(false);
  }, [favoritesMovies, id]);

  const handleClickShowMovie = async (e) => {
    navigate(`/movies/${id}`);
    dispatch(fetchDescriptionMovie(id));
  };

  const handleAddToFavorites = (e) => {
    e.stopPropagation();
    dispatch(updateFavoritesMovies({ id, title, description, image }));
    setFavorites(true);
  };

  const handleDeleteFromFavorites = (e) => {
    e.stopPropagation();
    dispatch(removeFromFavoritesMovies(id));
    setFavorites(false);
  };

  return (
    <Card className="wrapper-card" onClick={handleClickShowMovie}>
      <CardHeader title={title} />
      <CardMedia component="img" image={image} alt={title} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {favorites ? (
          <IconButton
            aria-label="delete from favorites"
            onClick={handleDeleteFromFavorites}
          >
            <FavoriteIcon style={{ color: "FC1414" }} />
          </IconButton>
        ) : (
          <IconButton
            aria-label="add to favorites"
            onClick={handleAddToFavorites}
          >
            <FavoriteIcon />
          </IconButton>
        )}
      </CardActions>
    </Card>
  );
};
