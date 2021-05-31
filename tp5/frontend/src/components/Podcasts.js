import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
// import {get} from 'axios'
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function Podcasts() {
  const classes = useStyles();
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    window.axios
      .get("api/podcasts")
      .then((res) => setPodcasts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Release Date</TableCell>
            <TableCell align="right">Listeners</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {podcasts &&
            podcasts.map((podcast) => (
              <TableRow key={podcast.name}>
                <TableCell component="th" scope="row">
                  <Link to={`/podcasts/${podcast.id}`}>{podcast.name}</Link>
                </TableCell>
                <TableCell align="right">{podcast.status}</TableCell>
                <TableCell align="right">{podcast.category}</TableCell>
                <TableCell align="right">{podcast.releaseDate}</TableCell>
                <TableCell align="right">{podcast.listeners}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
