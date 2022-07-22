<template>
  <div class="app-container">
    <div class="filter-container">
      <el-form :inline="true" :model="search">
        <el-form-item label="导出类型">
          <el-select
            v-model="search.type"
            placeholder="请选择"
            clearable
            @change="getList(1)"
          >
            <el-option
              v-for="(item,index) in exportOptions"
              :key="index"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="导出时间">
          <el-date-picker
            v-model="dateRangeValue"
            type="datetimerange"
            value-format="yyyy-MM-dd HH:mm:ss"
            :picker-options="pickerOptions"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            align="right"
            @change="onChangeDateRange"
          />
        </el-form-item>
        <el-button icon="el-icon-search" @click="getList(1)">
          {{ $t('table.search') }}
        </el-button>
      </el-form>
    </div>

    <el-table
      v-loading="loading"
      border
      highlight-current-row
      :data="list"
    >
      <el-table-column
        prop="id"
        label="ID"
        width="80"
        align="center"
      />
      <el-table-column
        label="导出类型"
        align="center"
        width="180"
      >
        <template slot-scope="{row}">
          {{ row.type | paraphrase(exportOptions) }}
        </template>
      </el-table-column>
      <el-table-column
        label="文件名称"
        align="center"
      >
        <template slot-scope="{row}">
          {{ row.file_name }}
        </template>
      </el-table-column>
      <el-table-column
        header-align="center"
        label="筛选条件"
      >
        <template slot-scope="{row,row:{extend}}">
          <div v-if="row.type==='entity_order'">
            <div>商品名称：{{ extend.goods_name || '-' }}</div>
            <div>订单号：{{ extend.order_no || '-' }}</div>
            <div>账号：{{ extend.account || '-' }}</div>
            <div>状态：{{ extend.status ? $options.filters.paraphrase(+extend.status,shopStatusOptions) : '-' }}</div>
            <div>开始时间：{{ extend.start_time || '-' }}</div>
            <div>结束时间：{{ extend.end_time || '-' }}</div>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="created_at"
        label="导出时间"
        width="140"
      />
      <el-table-column
        align="center"
        label="操作人"
        width="80"
      >
        <template slot-scope="{row}">
          {{ row.admin?row.admin.name : '-' }}
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        width="140"
        label="操作"
      >
        <template slot-scope="{row}">
          <el-button type="success" icon="el-icon-document" :loading="row.btnLoading" @click="onHandleDownload(row)">{{ $t('table.export') }} Excel</el-button>
        </template>
      </el-table-column>
    </el-table>
    <pagination v-show="pages.total > 0" :total="pages.total" :page.sync="pages.current" :limit.sync="pages.limit" @pagination="getList()" />
  </div>
</template>

<script>
import Pagination from '@/components/Pagination'
import { dataList } from '@/api/exportCenter'
import { whetherOptions, shopStatusOptions, payOptions, orderTypeOptions, pickerOptions, orderStatusOptions } from '@/utils/explain'
import { DominKey, getToken } from '@/utils/auth'
export default {
  name: 'ExportCenter',
  components: { Pagination },
  data() {
    return {
      domin: getToken(DominKey),
      loading: false,
      dateRangeValue: [],
      search: {
        type: '',
        start_time: '',
        end_time: ''
      },
      list: [],
      exportOptions: [
        { label: '全部', value: '' },
        { label: '商品订单', value: 'entity_order' },
        { label: '藏品订单', value: 'order' },
        { label: '用户藏品筛选', value: 'serial_user' },
        { label: '用户列表', value: 'user' }
      ],
      whetherOptions,
      shopStatusOptions,
      payOptions,
      pickerOptions,
      orderTypeOptions,
      orderStatusOptions,
      identityOptions: [],
      pages: {
        total: 0,
        limit: 20,
        current: 1
      }
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      this.getList()
    },
    getList(page = this.pages.current, loading = true) {
      if (this.loading) return
      this.loading = loading
      if (page === 1) this.pages.current = page
      dataList({ page, limit: this.pages.limit, ...this.search })
        .then(response => {
          this.list = response.data.data.map(v => {
            v.btnLoading = false
            return v
          })
          this.pages.total = response.data.total
        })
        .catch(() => {})
        .finally(() => {
          this.loading = false
        })
    },
    onChangeDateRange(value) {
      if (Array.isArray(value)) {
        this.search.start_time = value[0]
        this.search.end_time = value[1]
      } else {
        this.search.start_time = this.search.end_time = ''
        this.getList(1)
      }
    },
    onHandleDownload(row) {
      row.btnLoading = true
      try {
        location.href = this.domin + row.file_name
      } catch (error) {
        this.$message.error('下载失败')
      } finally {
        row.btnLoading = false
      }
    }
  }
}
</script>

<style  scoped>
.text:not(:last-child)::after{
  content: '，';
}
.app-container{
/* width: 1500px; */
}
</style>
