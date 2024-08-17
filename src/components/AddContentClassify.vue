<template>
  <el-button plain @click="dialogFormVisible = true"> 添加分类 </el-button>

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
p {
  position: relative;
  font-size: larger;
  font-weight: 500;
  top: -35px;
}
</style>
<script setup>
import { addContentClassify } from '@/api/api'
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
const dialogFormVisible = ref(false)
const formLabelWidth = '140px'
const router = useRouter()
const form = reactive({
  cate_name: '',
  cate_alias: ''
})
import { ElMessage } from 'element-plus'
const btnFunc = async () => {
  const res = await addContentClassify(form)
  console.log(res)
  ElMessage({
    type: 'success',
    message: '添加成功'
  })
  router.push('/layout/classify')

  dialogFormVisible.value = false
}
</script>
