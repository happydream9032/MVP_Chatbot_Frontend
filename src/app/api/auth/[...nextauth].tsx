import NextAuth from "next-auth";
import authOptions from "../../../next-auth.config";

export default NextAuth({ ...authOptions });
