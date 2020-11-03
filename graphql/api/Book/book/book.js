import Book from "../../../model/Book";
import Author from "../../../model/Author";

export default {
 Query: {
  getAllBooks: async (_, args) => {
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
  getOneBook: async (_, args) => {
   const { title } = args;

   try {
    const result = await Book.findOne({ title }).populate({
     path: `author`,
     model: Author,
    });

    return result;
   } catch (e) {
    console.log(e);
    return {};
   }
  },
  searchBook: async (_, args) => {
   const { title } = args;
   try {
    const result = await Book.find(
     { title: { $regex: `.*${title}.*` } },
     {}
     // $regex: 1. mongoose가 지원해주는 파이썬 기술
     //         2. 정규표현식
    ).sort({
     price: 1,
    });

    return result;
   } catch (e) {
    console.log(e);
    return [];
   }
  },
 },
};
