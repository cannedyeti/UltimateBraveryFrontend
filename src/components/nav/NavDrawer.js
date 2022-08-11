import React from "react";
import { Link } from "react-router-dom";
import { Divider, Drawer, List, ListItem } from '@mui/material/';
import { styled } from '@mui/material/styles';

const StyledLink = styled(Link)(({ theme }) => ({
  backgroundColor: "#181818",
  color: "#c9c9c9",
  textDecoration: "none",
  "&:hover": {
    backgroundColor: "#c9c9c9",
    color: "#181818",
  },
  width: "100%",
  padding: "1rem 2rem",
}));

function DrawerComponent(props) {
  return (
    <Drawer open={props.open} onClose={props.onClose} anchor="top">
      <List sx={{ backgroundColor: "#181818" }}>
        {props.links.map((link, index) => (
          <>
            <ListItem sx={{ padding: "0" }}>
              <StyledLink to={link.url} onClick={props.onClose}>{ link.name }</StyledLink>
            </ListItem>
            {index === props.links.length - 1 ? null : <Divider />}
          </>
        ))}
      </List>
    </Drawer>
  );
}
export default DrawerComponent;
