import {
  Container,
  TableContainer,
  TableCell,
  TableRow,
  TableBody,
  TableHead,
  Table,
  Button,
  Dialog,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import UpdateBook from "./UpdateBook";
import AddBook from "./AddBook";
import { useSelector, useDispatch } from "react-redux";
import { addBook, deleteBook, updateBook } from "../redux/actions";

export default function BookList() {
  const book = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const [updatePopupOpen, setUpdatePopupOpen] = useState(false);
  const [addPopupOpen, setAddPopupOpen] = useState(false);

  const [selectedRowId, setSelectedRowId] = useState(false);
  const columnNames = [
    { id: 1, name: "Book Name" },
    { id: 2, name: "Price($)" },
    { id: 3, name: "Category" },
    { id: 4, name: "Description" },
    { id: 5, name: "" },
    { id: 6, name: "" },
  ];

  const onDeleteBook = (id) => {
    dispatch(deleteBook(id));
  };

  const onUpdateBook = (id) => {
    setUpdatePopupOpen(true);
    setSelectedRowId(id);
  };

  const handleUpdateClose = () => {
    setUpdatePopupOpen(false);
  };

  const onAddBook = () => {
    setAddPopupOpen(true);
  };

  const handleAddClose = () => {
    setAddPopupOpen(false);
  };

  const setUpdatedBooks = (updatedBook) => {
    dispatch(updateBook(updatedBook));
  };

  const setNewBook = (newBook) => {
    dispatch(addBook(newBook));
  };

  return (
    <div>
      <Container sx={{ padding: "30px" }}>
        <Button variant="contained" onClick={() => onAddBook()}>
          + Add Book
        </Button>
        <TableContainer>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                {columnNames.map((column) => (
                  <TableCell
                    key={`columnname-${column.id}`}
                    data-testid={`columnname-${column.id}`}
                  >
                    <Typography variant="h6">{column.name}</Typography>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {book.books.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>
                    <Typography>{row.name}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>{row.price}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>{row.category}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>{row.description}</Typography>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      onClick={() => onDeleteBook(row.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      onClick={() => onUpdateBook(row.id)}
                    >
                      Update
                    </Button>
                  </TableCell>
                  {row.id === selectedRowId && updatePopupOpen ? (
                    <Dialog open={updatePopupOpen} onClose={handleUpdateClose}>
                      <UpdateBook
                        id={row.id}
                        selectedBook={row}
                        handleClose={handleUpdateClose}
                        setUpdatedBooks={setUpdatedBooks}
                      />
                    </Dialog>
                  ) : null}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {addPopupOpen ? (
          <Dialog
            open={addPopupOpen}
            onClose={handleAddClose}
            slotProps={{
              backdrop: {
                style: { backgroundColor: "rgba(255,255,255,0.2)" },
              },
            }}
          >
            <AddBook handleClose={handleAddClose} setNewBook={setNewBook} />
          </Dialog>
        ) : null}
      </Container>
    </div>
  );
}
