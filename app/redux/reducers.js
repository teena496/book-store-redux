const initialState = {
  books: [
    {
      id: 1,
      name: "A Brief History of Time",
      price: 26,
      category: "Popular science",
      description:
        "A simple summary of A Brief History of Time goes all the way from the beginning of the universe to its end, explaining things like space and time, the expanding universe, the uncertainty principle, black holes, wormholes, and time travel along the way. It sold over 25 million copies.",
    },
    {
      id: 2,
      name: "The Power of Positive Thinking",
      price: 20,
      category: "Self-help",
      description:
        "In The Power of Positive Thinking, Norman Vincent Peale says there is no problem or obstacle you can't overcome with faith and a positive mindset. This self-help classic outlines the practical techniques of applied Christianity to help you take control of the events in your life rather than be directed by them.",
    },
    {
      id: 3,
      name: "Atomic Habits",
      price: 22,
      category: "Self-help",
      description:
        "Atomic Habits is a practical self-help book that helps readers change bad habits and develop good ones.",
    },
    {
      id: 4,
      name: "Rich Dad Poor Dad",
      price: 16,
      category: "Personal finance",
      description:
        "The book is based on Kiyosaki's personal experiences with his two fathers - his biological father (poor dad) and his best friend's father (rich dad). The book provides a guide to financial literacy and teaches readers about the importance of financial education, creating wealth, and achieving financial freedom.",
    },
    {
      id: 5,
      name: "Sapiens: A Brief History of Humankind",
      price: 34,
      category: "Non-fiction",
      description:
        "Sapiens: A Brief History of Humankind is a book by Yuval Noah Harari, first published in Hebrew in Israel in 2011 based on a series of lectures Harari taught at The Hebrew University of Jerusalem, and in English in 2014.[1][2] The book, focusing on Homo sapiens, surveys the history of humankind, starting from the Stone Age and going up to the twenty-first century. The account is situated within a framework that intersects the natural sciences with the social sciences.",
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    case "UPDATE_BOOK":
      return {
        ...state,
        books: state.books.map((book) =>
          book.id === action.payload.id ? action.payload : book
        ),
      };
    case "DELETE_BOOK":
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
