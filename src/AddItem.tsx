import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { Item } from "./App";

type AddItemProps = {
  addItem: (item: Item) => void;
}

export default function AddItem(props: AddItemProps) {
  const [open, setOpen] = useState(false);

  const [item, setItem] = useState<Item>({
    product: "",
    amount: 0,
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addItem = () => {
    props.addItem(item);
    // Clear the text fields and close modal dialog
    setItem({
      product: "",
      amount: 0,
    });
    handleClose();
  }

  return (
    <>
      <Button onClick={handleOpen}>Add Item</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Item</DialogTitle>
        <DialogContent>
          <TextField
            value={item.product}
            onChange={(e) => setItem({ ...item, product: e.target.value })}
            label="Product"
            margin="dense"
            fullWidth
          />
          <TextField
            value={item.amount}
            // type="number"
            onChange={(e) => setItem({ ...item, amount: e.target.value })}
            label="Amount"
            margin="dense"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={addItem}>Add</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
