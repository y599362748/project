export * from '@/stores/modules/tokenStore'
export * from '@/stores/modules/contentStore'
import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(persist)

export default pinia
