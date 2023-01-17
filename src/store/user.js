// /store/user.js

import { defineStore } from "pinia";
import { supabase } from "../supabase";
import { useRouter } from "vue-router";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
  }),

  actions: {

    // Recuperar user
    async fetchUser() {
      const user = await supabase.auth.user();
      this.user = user;
    },

    // Hacer sign up
    async signUp(email, password) {
      const { user, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });
      if (error) throw error;
      if (user) this.user = user;
    },

    // Hacer sign in
    async signIn(email, password) {
      const {user, error} = await supabase.auth.signIn({
        email: email,
        password: password,
      });
      if (error) throw error;
      if (user) this.user = user;
    },

    // Hacer log out
    async signOut(){
      let { error } = await supabase.auth.signOut();
      if (error) throw error;
      this.user = null;      
    },
    
    persist: {
      enabled: true,
      strategies: [
        {
          key: "user",
          storage: localStorage,
        },
      ],
    },
  },
});
