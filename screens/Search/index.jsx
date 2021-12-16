import React from "react";
import Paper from "../../components/Paper";
import SearchBar from "../../components/SearchBar";

const Search = ({ navigation }) => (
  <Paper>
    <SearchBar {...navigation} />
  </Paper>
);

export default Search;
