import { useState } from "react";
import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import "./App.css";
import AddItem from "./AddItem";

export type Item = {
  product: string;
  amount: number;
}

function App() {
  const [items, setItems] = useState<Item[]>([]);

  const addItem = (item: Item) => {
    setItems([item, ...items]);
  }

  return <Container>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          Shopping List
        </Typography>
      </Toolbar>
    </AppBar>
    <AddItem addItem={addItem} />
  </Container>;
}

export default App;
