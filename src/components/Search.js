import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchMoviesList } from "../store";

export const Search = ({ label }) => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(
      fetchMoviesList({
        value,
        callback: () => {
          setValue("");
        },
      })
    );
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Container fixed>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            width: 500,
            margin: "40px auto",
          }}
        >
          <TextField
            fullWidth
            value={value}
            onChange={handleChange}
            label={label}
            id="search"
            required
          />
        </Box>
      </form>
    </Container>
  );
};
