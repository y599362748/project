import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTokenStore = defineStore(
  'token',
  () => {
    const token = ref(null)
    const setToken = (value) => {
      token.value = value
    }
    const isTrue = ref(null)
    const setIsTrue = (value) => {
      isTrue.value = value
    }
    const saveName = ref('')
    const savePassword = ref('')
    const setUserInfo = (user, pwsd) => {
      saveName.value = user
      savePassword.value = pwsd
    }
    return {
      token,
      setToken,
      isTrue,
      setIsTrue,
      saveName,
      savePassword,
      setUserInfo
    }
  },
  {
    persist: {
      storage: localStorage,
      paths: ['token', 'isTrue', 'saveName', 'savePassword']
    }
  }
)
