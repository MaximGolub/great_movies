import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import { nanoid } from "nanoid";
import { useSelector } from "react-redux";

export const MovieView = () => {
  const { descriptionMovie, moviesLoading } = useSelector(
    (state) => state.movies
  );

  return (
    <Container
      fixed
      style={{
        marginTop: "40px",
      }}
    >
      {moviesLoading ? (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Box>
      ) : (
        <Grid container spacing={{ xs: 2 }} columns={12}>
          <Grid item xs={4} sm={4} md={4}>
            <Paper>
              <Box>
                <img
                  src={descriptionMovie.image}
                  alt={descriptionMovie.plot}
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={8} sm={8} md={8}>
            <Typography variant="h3">{descriptionMovie.fullTitle}</Typography>
            <Typography variant="subtitle1">
              Year: {descriptionMovie.year}
            </Typography>
            <Typography variant="subtitle1">
              Duration: {descriptionMovie.runtimeStr}
            </Typography>
            <Typography variant="h4">Actors:</Typography>
            <Grid container spacing={{ xs: 2 }} columns={12}>
              {descriptionMovie.actorList.map((item) => (
                <Grid item xs={3} sm={3} md={3} key={nanoid()}>
                  <img
                    style={{
                      width: "100%",
                    }}
                    src={`${item.image}`}
                    alt={item.name}
                    loading="lazy"
                  />
                  <Typography variant="subtitle1">{item.name}</Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};
