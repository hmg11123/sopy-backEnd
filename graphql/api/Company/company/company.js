import Company from "../../../model/Company";
import Snack from "../../../model/Snack";

export default {
 Query: {
  getAllCompanyInSnack: async (_, args) => {
   try {
    const result = await Company.find().populate({
     path: `snackList`,
     model: Snack,
    });
    return result;
   } catch (e) {
    console.log(e);
    return [];
   }
  },
 },
};
