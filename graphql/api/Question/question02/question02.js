import Student from "../../../model/Student";

export default {
 Query: {
  getGteStudent: async (_, args) => {
   const { age } = args;
   try {
    const result = await Student.find({ age: { $gte: age } }, {});
    return result;
   } catch (e) {
    console.log(e);
    return [];
   }
  },
 },
};
