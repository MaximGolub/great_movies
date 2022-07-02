import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { useSelector } from "react-redux";
import { MovieCard } from "../components";

export const FavoritesView = () => {
  const { favoritesMovies } = useSelector((state) => state.movies);

  return (
    <Container fixed sx={{ margin: "40px auto" }}>
      <Grid container spacing={{ xs: 3 }} columns={12}>
        {favoritesMovies.map((item) => {
          return (
            <Grid item xs={3} sm={3} md={3} key={item.id}>
              <MovieCard
                id={item.id}
                title={item.title}
                description={item.description}
                image={item.image}
              />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};
