import React from "react";
import { ListOfCategories } from "./components/ListOfCategories";
import { GlobalStyle } from "./styles/GlobalStyles";
import { ListOfPhotoCard } from "./components/ListOfPhotoCard";
import { Header } from "./components/Header";

export const App = () => (
  <>
    <GlobalStyle />
    <Header />
    <ListOfCategories />
    <ListOfPhotoCard />
  </>
);
