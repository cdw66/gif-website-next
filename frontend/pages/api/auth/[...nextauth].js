import NextAuth from "next-auth";
import axios from "axios";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    // ...add more providers here
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const { data } = await axios.post(
            `${process.env.STRAPI_API}/auth/local`,
            {
              identifier: credentials.username,
              password: credentials.password,
            }
          );

          //   console.log("data", data);

          //   console.log(user);

          if (data) {
            // console.log("credentials", user);
            // const { user, jwt } = response;
            // console.log("user", user);
            const { jwt, user } = data;
            return { ...user, jwt };
          } else {
            return null;
          }
        } catch (err) {
          console.log(err);
          return null;
        }
      },
    }),
  ],

  pages: {
    signIn: "/login",
    signUp: "/register",
  },

  session: {
    strategy: "jwt",
  },

  callbacks: {
    // async signIn(user) {
    //   return user.userId && user.isActive === "1";
    // },
    jwt: async ({ token, user }) => {
      const isSignIn = user ? true : false;
      if (isSignIn) {
        token.id = user.id;
        token.jwt = user.jwt;
        // token.username = user.username;
        // token.user = user;
        // OR return {...token, ...user} - this will give access to all fields
      }
      return Promise.resolve({ ...token, ...user });
    },

    session: async ({ session, token }) => {
      session.id = token.id;
      session.jwt = token.jwt;
      //   session.user.id = token.id;
      //   session.user.username = token.username;
      //   session.user.id = token.user.id;
      //   session.user.username = token.user.username;

      return Promise.resolve(session);
    },
  },
});

// export default (req, res) => NextAuth(req, res, authOptions);
