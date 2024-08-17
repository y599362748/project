<script setup>
import { delContentClassify, editContentClassify } from '@/api/api'
import AddContentClassify from '@/components/AddContentClassify.vue'
import { useContentStore } from '@/stores'
const contentStore = useContentStore()
contentStore.setContent()

import { ElMessageBox, ElMessage } from 'element-plus'
//
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
const dialogFormVisible = ref(false)
const formLabelWidth = '140px'
const router = useRouter()
const form = reactive({
  id: '',
  cate_name: '',
  cate_alias: ''
})

const btnFunc = async () => {
  const res = await editContentClassify(form)
  console.log(res)
  ElMessage({
    type: 'success',
    message: '修改成功'
  })
  router.go(0)
  dialogFormVisible.value = false
}
const editBtn = (row) => {
  dialogFormVisible.value = true
  form.id = row.id
}
const delBtn = (row) => {
  ElMessageBox.confirm('确定删除这条数据吗', '提示', {
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    type: 'warning',
    draggable: true
  })
    .then(async () => {
      ElMessage({
        type: 'success',
        message: '删除成功'
      })
      const res = await delContentClassify(row.id)
      console.log(res)

      router.go(0)
      alert(`${res.message}`)
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '取消删除'
      })
    })
}
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <span>文章分类</span>
        <AddContentClassify></AddContentClassify>
      </el-header>
      <el-main>
        <el-table
          :data="contentStore.content"
          height="100%"
          style="width: 100%"
        >
          <el-table-column prop="id" label="序号" width="180" />
          <el-table-column prop="cate_name" label="分类名称" width="560" />
          <el-table-column prop="cate_alias" label="分类别名" width="800" />
          <el-table-column prop="edit" label="操作" width="100">
            <template #default="scope">
              <el-button type="primary" circle @click="editBtn(scope.row)"
                ><el-icon><Edit /></el-icon
              ></el-button>
              <el-button type="danger" circle @click="delBtn(scope.row)"
                ><el-icon><Delete /></el-icon
              ></el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </div>

  <el-dialog v-model="dialogFormVisible" width="500">
    <p>添加分类</p>
    <el-form :model="form">
      <el-form-item label="* 分类名称" :label-width="formLabelWidth">
        <el-input v-model="form.cate_name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="* 分类别名" :label-width="formLabelWidth">
        <el-input v-model="form.cate_alias" autocomplete="off" />
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="btnFunc"> 确认 </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<style scoped>
.common-layout {
  background-color: #fff;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.el-header {
  border-bottom: 1px solid rgb(241, 243, 246);
  line-height: 59px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.el-table .cel {
  text-align: center;
}
</style>
