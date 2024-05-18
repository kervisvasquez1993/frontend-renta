import { urlBase } from "@/apiBackend/APIs";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "email", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          const response = await urlBase.post(
            "/api/login",
            { email: credentials?.email, password: credentials?.password },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          if (response.status === 200) {
            const user = response.data;
            return {
              ...user.data,
              data: user.data,
              accessToken: user.access_token,
            };
          } else {
            console.error("Error al enviar el formulario");
          }
        } catch (error) {
          console.error("Error de red", error);
          // toast.error(error.response.data.error.email);
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.data = user.data;
        token.accessToken = user.accessToken;
      }
      return token;
    },
    async session({ session, token, user }) {
      session.data = token.data;
      session.accessToken = token.accessToken;
      return session;
    },
  },
  pages: {
    signIn: "/login",
    signUp: "/register",
  },
};
export default NextAuth(authOptions);
