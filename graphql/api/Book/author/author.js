import Author from "../../../model/Author";
import Book from "../../../model/Book";

export default {
 Query: {
  getAllAuthor: async (_, args) => {
   try {
    const result = await Author.find({}, {}).populate({
     path: `artList`,
     model: Book,
    });

    return result;
   } catch (e) {
    console.log(e);
    return [];
   }
  },
  getOneAuthor: async (_, args) => {
   const { name } = args;
   try {
    const result = await Author.findOne({ name }, {}).populate({
     path: `artList`,
     model: Book,
    });

    return result;
   } catch (e) {
    console.log(e);
    return {};
   }
  },
 },
};
