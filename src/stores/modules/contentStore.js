import { getContentClassify, getContentList } from '@/api/api'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useContentStore = defineStore('content', () => {
  const content = ref(null)
  const list = ref(null)
  const setContent = async () => {
    let res = await getContentClassify()
    content.value = res.data
  }
  const total = ref(0)
  const setList = async (data) => {
    let res = await getContentList(data)

    res.data.map((item) => {
      const date = new Date(item.pub_date)
      const year = date.getFullYear()
      const month = (date.getMonth() + 1).toString().padStart(2, '0')
      const day = date.getDate().toString().padStart(2, '0')
      item.pub_date = `${year}年${month}月${day}日` // 输出格式如：2023-04-20
    })
    total.value = res.total
    list.value = res.data
  }
  return {
    content,
    setContent,
    setList,
    list,
    total
  }
})
