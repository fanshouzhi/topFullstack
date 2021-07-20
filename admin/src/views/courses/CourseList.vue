<template>
    <div>
        <h3>课程列表</h3>
        <div>
            <el-button type="success" size="small" @click="$router.push(`/course/create`)">创建课程</el-button>
            
        </div>
        <el-table :data="data.data" border stripe>
            <el-table-column
                v-for="(col, name) in columns"
                :prop="name"
                :key="name"
                :label="col.label"
                :width="col.width"
            >
            </el-table-column>
            <el-table-column :label="操作" :width="200">
                <template v-slot="{ row }">
                    <el-button type="success" size="smail" @click="$router.push(`/course/edit/${row._id}`)"
                        >编辑</el-button
                    >
                    <el-button type="danger" size="smail" @click="remove(row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class CourseList extends Vue {
    data = [];
    columns = {
        _id: { label: "id" },
        name: { label: "课程名称" },
        caver: { label: "课程封面图" },
    };
    async feath() {
        let res = await this.$axios.get("/couress");
        this.data = res.data;
    }
    async remove(row: any) {
        try {
            await this.$confirm("是否确认删除？");
        } catch (error) {
            return;
        }
        await this.$axios.delete(`/couress/${row._id}`);
        this.$message.success("删除成功！");
        this.feath();
    }
    created() {
        this.feath();
    }
}
</script>

<style></style>
