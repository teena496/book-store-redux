import React, { useState } from "react";
import {
  Button,
  DialogTitle,
  DialogContent,
  Container,
  DialogActions,
  Typography,
} from "@mui/material";
import BookField from "./BookField";

export default function UpdateBook({
  id,
  selectedBook,
  handleClose,
  setUpdatedBooks,
}) {
  const [name, setName] = useState(selectedBook.name);
  const [price, setPrice] = useState(selectedBook.price);
  const [category, setCategory] = useState(selectedBook.category);
  const [description, setDescription] = useState(selectedBook.description);
  const [message, setMessage] = useState("");

  const onUpdateClick = () => {
    if (name || price || category || description) {
      let updatedBook = { id, name, price, category, description };
      setUpdatedBooks(updatedBook);
      handleClose();
    } else {
      setMessage("Please enter the updated values.");
    }
  };

  return (
    <>
      <DialogTitle fontWeight={"bold"}>UPDATE BOOK</DialogTitle>
      <DialogContent>
        <Container
          sx={{
            padding: "30px",
            display: "flex",
            flexDirection: "column",
            gap: 1,
            width: "30rem",
          }}
        >
          <BookField
            fieldname="Book Name"
            fieldValue={name}
            setField={setName}
          />
          <BookField fieldname="Price" fieldValue={price} setField={setPrice} />
          <BookField
            fieldname="Category"
            fieldValue={category}
            setField={setCategory}
          />
          <BookField
            fieldname="Description"
            fieldValue={description}
            setField={setDescription}
          />
          {!name && !price && !category && !description && message ? (
            <Typography variant="h7" sx={{ color: "warning.main" }}>
              {message}
            </Typography>
          ) : null}
        </Container>
        <DialogActions>
          <Button
            data-testid="cancel-button"
            variant="contained"
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            data-testid="add-button"
            variant="contained"
            onClick={onUpdateClick}
          >
            Update
          </Button>
        </DialogActions>
      </DialogContent>
    </>
  );
}
