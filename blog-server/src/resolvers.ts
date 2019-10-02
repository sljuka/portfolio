const blogs = [
  {
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling",
    content: "This is a book"
  },
  {
    title: "Jurassic Park",
    author: "Michael Crichton",
    content: "This is also a book"
  }
];

export const resolvers = {
  Query: {
    blogs: () => blogs
  }
};
