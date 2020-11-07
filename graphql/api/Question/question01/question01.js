import Book from "../../../model/Book";
import Author from "../../../model/Author";

export default {
 Query: {
  bookAllGet: async (_, args) => {
   try {
    const result = await Book.find().populate({
     path: `author`,
     model: Author,
    });
    return result;
   } catch (e) {
    console.log(e);
    return [];
   }
  },
 },
};
