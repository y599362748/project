<script setup>
import { ref } from 'vue'

// 获取列表
import { useContentStore } from '@/stores'
import { useRouter } from 'vue-router'
import { delContentList } from '@/api/api'
const router = useRouter()
const contentStore = useContentStore()
contentStore.setContent()

const params = ref({
  pagenum: 1,
  pagesize: 3,
  cate_id: '',
  state: ''
})
contentStore.setList(params.value)
const statusValue = ref('')
const classifyValue = ref('')
const status = ref([
  {
    id: '0',
    value: '已发布'
  },
  {
    id: '1',
    value: '草稿'
  }
])
const search = () => {
  params.value.cate_id = classifyValue.value.toString()
  params.value.state = statusValue.value.toString()
  contentStore.setList(params.value)
}
const reset = () => {
  router.go(0)
}
const onSizeChange = (value) => {
  params.value.pagesize = value
  contentStore.setList(params.value)
}
const onCurrentChange = (value) => {
  params.value.pagenum = parseInt(value)
  contentStore.setList(params.value)
}
const delFunc = (data) => {
  delContentList(data.id)
  contentStore.setList(params.value)
}
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <span>文章管理</span>
      </el-header>
      <el-main>
        <span>
          文章分类：
          <el-select
            v-model="classifyValue"
            placeholder="请选择"
            style="width: 240px"
          >
            <el-option
              v-for="item in contentStore.content"
              :key="item.id"
              :label="item.alias_name"
              :value="item.cate_name"
            />
          </el-select>
        </span>
        <span class="mid-span">
          发布状态：
          <el-select
            v-model="statusValue"
            placeholder="请选择"
            style="width: 240px"
          >
            <el-option
              v-for="item in status"
              :key="item.id"
              :label="item.value"
              :value="item.value"
            />
          </el-select>
        </span>
        <span>
          <el-button @click="search" type="primary">搜索</el-button>
          <el-button @click="reset">重置</el-button>
        </span>
        <el-table :data="contentStore.list" style="width: 100%">
          <el-table-column prop="title" label="文章标题" width="180" />
          <el-table-column prop="cate_name" label="分类" width="560" />
          <el-table-column prop="pub_date" label="发表时间" width="400" />
          <el-table-column prop="state" label="状态" width="400" />
          <el-table-column label="操作" width="100">
            <template #default="scope">
              <el-button type="primary" circle
                ><el-icon><Edit /></el-icon
              ></el-button>
              <el-button type="danger" circle @click="delFunc(scope.row)"
                ><el-icon><Delete /></el-icon
              ></el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          v-model:current-page="params.pagenum"
          v-model:page-size="params.pagesize"
          :page-sizes="[2, 3, 5, 7]"
          :background="true"
          layout="jumper, total, sizes, prev, pager, next"
          :total="contentStore.total"
          @size-change="onSizeChange"
          @current-change="onCurrentChange"
          style="margin-top: 20px; justify-content: flex-end"
        />
      </el-main>
    </el-container>
  </div>
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
.el-main {
  overflow: hidden;
}
.mid-span {
  margin: 0 20px 0 20px;
}
</style>
