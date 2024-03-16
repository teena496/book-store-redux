import { Container, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import BookField from "./BookField";

export default function AddBook({ handleClose, setNewBook }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  const onAddClick = () => {
    if (name || price || category || description) {
      setNewBook({ name, price, category, description });
      handleClose();
    } else {
      setMessage("Please enter the book details");
    }
  };

  return (
    <div>
      <Container
        sx={{
          padding: "30px",
          display: "flex",
          flexDirection: "column",
          gap: 1,
          width: "30rem",
        }}
      >
        <Typography variant="h5" fontWeight="bold" alignSelf="center">
          ADD NEW BOOK
        </Typography>
        <BookField fieldname="Book Name" fieldValue={name} setField={setName} />
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
        <Button variant="contained" onClick={onAddClick}>
          Add
        </Button>
      </Container>
    </div>
  );
}
