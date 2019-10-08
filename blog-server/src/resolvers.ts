const blogs = [
  {
    id: 1,
    title: "Harry Potter and the Chamber of Secrets",
    description: "This is a wholesome blog",
    author: "J.K. Rowling",
    content: "This is a book"
  },
  {
    id: 2,
    title: "Jurassic Park",
    description: "This is a wholesome blog",
    author: "Michael Crichton",
    content: "This is also a book"
  }
];

export const resolvers = {
  Query: {
    blogs: () => blogs
  }
};
