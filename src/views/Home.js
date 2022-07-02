import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { useSelector } from "react-redux";
import { Search, MovieCard } from "../components";

export const HomeView = () => {
  const { moviesList, moviesLoading } = useSelector((state) => state.movies);

  return (
    <Container fixed>
      <Search label="Enter movie title" />
      {moviesLoading ? (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Box>
      ) : (
        <Grid container spacing={{ xs: 2 }} columns={12}>
          {moviesList.map((item) => {
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
      )}
    </Container>
  );
};
