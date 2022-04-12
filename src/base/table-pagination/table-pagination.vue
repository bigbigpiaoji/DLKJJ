<!--
 * @Descripttion: 
 * @version: 
 * @Author: 王钦洲
 * @Date: 2019-08-05 09:50:38
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-08-19 10:01:02
 -->
<template>
  <div class="table-pagination">
    <el-table
      ref="table"
      class="table"
      :class="showTheadCheckbox ? '' : 'hidden-thead-checkbox'"
      :height="getHeight"
      :empty-text="emptyTextDisplay"
      v-bind="$attrs"
      v-on="$listeners"
      header-cell-class-name="dark-header-cell"
      @select="handleSelect"
      @row-click="hanldeRowClick"
      :data="data"
    >
      <!--selection选择框-->
      <el-table-column
        :reserve-selection="reserveSelection"
        v-if="selection"
        type="selection"
        style="width: 50px"
      >
      </el-table-column>

      <template v-for="(column, index) in columns">
        <el-table-column v-bind="column" :key="index">
          <template slot-scope="scope">
            <template v-if="column.prop === 'operation'">
              <el-link
                class="c__mr20"
                v-for="(item, idx) in scope.row.operationList"
                :key="item.value"
                :type="item.type || 'text'"
                :underline="item.underline || false"
                :disabled="item.disabled"
                @click.stop="handleOperationClick(scope.row, item, idx)"
                >{{ item.label }}</el-link
              >
            </template>
            <template v-else-if="column.radio">
              <i class="el-icon-check" v-if="column.radio"></i>
            </template>
            <template v-else-if="column.switch">
              <div @click.stop="handleSwitchClick(scope.row)">
                <el-switch
                  :inactive-value="inactiveValue"
                  :active-value="activeValue"
                  v-model="scope.row[switchKey]"
                  @change="
                    (val) => {
                      handleSwitchChange(val, scope.row, column);
                    }
                  "
                >
                </el-switch>
              </div>
            </template>
            <template v-else-if="column.formatter">
              <span
                v-html="
                  column.formatter(
                    scope.row,
                    column,
                    scope.row[column.prop],
                    index
                  )
                "
              ></span>
            </template>
            <template v-else>
              <template v-if="column.slotScope">
                <slot v-bind:row="scope.row" :name="column.slotScope"></slot>
              </template>
              <template v-else>
                <span v-html="scope.row[column.prop]"></span>
              </template>
            </template>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <el-pagination
      v-if="hasPagination"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="_page"
      :page-size="_pageSize"
      :page-sizes="pageSizes"
      :layout="layout"
      :total="_total"
      background
    >
    </el-pagination>
  </div>
</template>
<script>
export default {
  components: {},
  name: "table-pagination",
  props: {
    columns: {
      type: Array,
      default: () => [],
    },
    data: {
      type: Array,
      default: () => [],
    },
    rowKey: {
      type: String,
      default: "id",
    },

    switchKey: {
      type: String,
      default: "switch",
    },
    height: {
      type: [Number, String],
      default: 286,
    },
    page: {
      type: [Number, String],
      default: 1,
    },
    pageSizes: {
      type: Array,
      default: () => [10, 20, 30, 40, 50, 100],
    },
    pageSize: {
      type: [Number, String],
      default: 10,
    },
    total: {
      type: [Number, String],
      default: 0,
    },
    selection: {
      type: Boolean,
      default: false,
    },
    reserveSelection: {
      type: Boolean,
      default: false,
    },
    emptyText: {
      type: String,
      default: "数据加载中",
    },
    layout: {
      type: String,
      default: "total , prev, pager, next, jumper",
    },
    hasAllSelected: {
      type: Boolean,
      default: false,
    },
    selectionStore: {
      type: Array,
      default: () => [],
    },
    switchStore: {
      type: Array,
      default: () => [],
    },
    multiple: {
      type: Boolean,
      default: true,
    },
    hasPagination: {
      type: Boolean,
      default: true,
    },
    checkOnClickRow: {
      type: Boolean,
      default: true,
    },
    activeValue: {
      type: Boolean,
      default: true,
    },
    inactiveValue: {
      type: Boolean,
      default: false,
    },
  },
  data: () => {
    return {
      _page: 1,
      _pageSize: 10,
      _total: 0,
      switchList: [],
      checkedStore: [],
    };
  },
  computed: {
    emptyTextDisplay() {
      if (this.data.length === 0 && this.total !== 0) {
        return "数据加载完毕";
      } else if (this.total === 0) {
        return "没有数据啦";
      } else {
        return "数据加载中";
      }
    },
    showTheadCheckbox() {
      return this.hasAllSelected;
    },
    getHeight() {
      return this.$pxToRem(this.height) + "rem";
    },
  },
  watch: {
    page(val) {
      this._page = val;
      this.$emit("pagination-change", this._page, this._pageSize);
    },
    pageSize(val) {
      this._pageSize = val;
      this.$emit("pagination-change", this._page, this._pageSize);
    },
    total(val) {
      this._total = val;
    },
    _page(val) {
      this.$emit("update:page", val);
    },
    _pageSize(val) {
      this.$emit("update:pageSize", val);
    },
    _total(val) {
      this.$emit("update:total", val);
    },
    data: {
      handler: function (data) {
        this.handleSelection(this.$refs.table, this.checkedStore, data);
        this.handleForSwitchData(this.data, this.switchList);
      },
      immediate: true,
    },
    checkedStore: {
      handler: function (data) {
        this.handleSelection(this.$refs.table, data, this.data);
        this.$emit("update:selectionStore", this.checkedStore);
      },
      immediate: true,
    },
    selectionStore: {
      handler: function (data) {
        this.checkedStore = data;
      },
      immediate: true,
    },
    switchStore: {
      handler: function (data) {
        this.switchList = data;
      },
      immediate: true,
    },
    switchList: {
      handler: function (data) {
        this.handleForSwitchData(this.data, this.switchList);
        this.$emit("update:switchStore", this.switchList);
      },
      immediate: true,
    },
  },
  created() {
    this._page = this.page;
    this._pageSize = this.pageSize;
    this._total = this.total;
  },
  mounted() {},
  methods: {
    handleOperationClick(row, item, idx) {
      this.$emit("operation", row, item, idx);
    },
    handleSizeChange(val) {
      this.$emit("update:pageSize", val);
      this.$emit("size-change", val);
    },
    handleCurrentChange(val) {
      this.$emit("update:page", val);
    },

    getTable() {
      return this.$refs.table;
    },
    handleSelect(selection, row) {
      if (!this.multiple) {
        // 单选
        row._checked = true;
        this.checkedStore = [row];
      } else {
        // 多选
        let isAdd = selection.some(
          (item) => item[this.rowKey] === row[this.rowKey]
        );
        // 新勾选
        if (isAdd) {
          this.checkedStore.push(row);
        } else {
          // 取消勾选
          this.checkedStore = this.checkedStore.filter(
            (item) => item[this.rowKey] !== row[this.rowKey]
          );
        }
      }
      this.$emit("select", selection, row);
    },
    hanldeRowClick(row) {
      if (this.checkOnClickRow) {
        if (!this.multiple) {
          // 单选
          row._checked = true;
          this.checkedStore = [row];
        } else {
          if (row._checked) {
            // 取消选择
            this.checkedStore = this.checkedStore.filter(
              (item) => item[this.rowKey] != row[this.rowKey]
            );
          } else {
            // 新增选择
            this.checkedStore.push(row);
          }
        }
      }
      this.$emit("row-click", row);
    },

    handleSelection(target, selected, data) {
      this.$nextTick(() => {
        target && target.doLayout();

        let selectedIds = selected.map((item) => item[this.rowKey]);

        data.forEach((item, idx) => {
          if (selectedIds.includes(item[this.rowKey])) {
            target && target.toggleRowSelection(data[idx], true);
            item._checked = true;
          } else {
            target && target.toggleRowSelection(data[idx], false);
            item._checked = false;
          }
        });
      });
    },

    handleSwitchClick(row) {
      //hack
      this.$nextTick(() => {
        this.$refs.table.toggleRowSelection(row);
        this.$refs.table.toggleRowSelection(row);
      });
    },
    handleSwitchChange(val, row, column) {
      let id = row[this.rowKey];
      // 临时更改勾选
      row[this.switchKey] = val;

      if (val === this.activeValue) {
        let switchPos = this.switchList
          .map((item) => item[this.rowKey])
          .indexOf(id);
        // 存在则更新
        if (switchPos !== -1) {
          this.$set(this.switchList, position, row);
        } else {
          // 不存在则增加
          this.switchList.push(row);
        }
      } else {
        this.switchList = this.switchList.filter((item) => {
          return item[this.rowKey] !== id;
        });
      }

      let position = this.checkedStore
        .map((item) => item[this.rowKey])
        .indexOf(id);
      if (position !== -1) {
        this.$set(this.checkedStore, position, row);
      }
    },

    handleForSwitchData(data = [], switchList = []) {
      let switchIds = switchList.map((item) => item[this.rowKey]);
      data.forEach((item) => {
        if (switchIds.includes(item[this.rowKey])) {
          // this.$set(item,this.switchKey,true);
          item[this.switchKey] = this.activeValue;
        } else {
          item[this.switchKey] = this.inactiveValue;
          //  this.$set(item,this.switchKey,false);
        }
      });
    },
  },
};
</script>
<style lang="less">
.hidden-thead-checkbox {
  thead .el-checkbox:last-child {
    visibility: hidden;
  }
}
</style>
