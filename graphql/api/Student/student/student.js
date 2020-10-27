import Student from "../../../model/Student";
import Lecture from "../../../model/Lecture";

export default {
 Query: {
  getAllStudents: async (_, args) => {
   try {
    const result = await Student.find();
    return result;
   } catch (e) {
    console.log(e);
    return [];
   }
  },
  getStudentByOne: async (_, args) => {
   const { name } = args;

   try {
    const result = await Student.findOne({ name }).populate({
     path: `lecture`,
     model: Lecture,
    });
    return result;
   } catch (e) {
    console.log(e);
    return {};
   }
  },
 },
};
