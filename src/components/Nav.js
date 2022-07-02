import * as React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";

const listLinks = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/movies/favorites",
    name: "Favorite movies",
  },
];

export const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const activeView =
    listLinks.find((item) => item.path === location.pathname) || listLinks[0];

  return (
    <AppBar position="static">
      <Container fixed>
        <Box
          style={{
            display: "flex",
            flex: "1",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6" color="inherit" component="div">
            {activeView.name}
          </Typography>
          <List>
            <ListItem disablePadding>
              {listLinks.map((link) => {
                return (
                  <ListItemButton
                    key={link.path}
                    sx={{ textAlign: "center" }}
                    onClick={() => {
                      navigate(link.path);
                    }}
                  >
                    <ListItemText primary={link.name} />
                  </ListItemButton>
                );
              })}
            </ListItem>
          </List>
        </Box>
      </Container>
    </AppBar>
  );
};
