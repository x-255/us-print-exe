import { defineStore } from "pinia"
import { ref } from "vue"

export const useLoginStore = defineStore('user', () => {
  const isLogin = ref(false)

  const handleLogin = () => {
    isLogin.value = true
  }

  return {
    isLogin,
    handleLogin
  }
},{ persist: true})