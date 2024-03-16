export const addBook = book => ({
    type: 'ADD_BOOK',
    payload: book,
  });
  
  export const updateBook = book => ({
    type: 'UPDATE_BOOK',
    payload: book,
  });
  
  export const deleteBook = bookId => ({
    type: 'DELETE_BOOK',
    payload: bookId,
  });
  