export default {
 Mutation: {
  createUser: async (_, args) => {
   const { email, name, mobile } = args;

   console.log(email);
   console.log(name);
   console.log(mobile);

   return true;
  },
 },
};
