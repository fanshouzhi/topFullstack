<template>
    <div>
        <avue-crud
            :data="data.data"
            :option="option"
            @row-save="save"
            @row-update="update"
            @row-del="remove"
        ></avue-crud>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class CourseList extends Vue {
    data = [];
    option = {
        title: "表格的标题",
        titleSize: "h3",
        titleStyle: {
            color: "red",
        },
        align: "center",
        menuAlign: "center",
        page: true,
        column: [
            {
                label: "课程名称",
                prop: "name",
            },
            {
                label: "课程封面图",
                prop: "caver",
            },
        ],
    };
    /**
     * 保存
     */
    async save(row: any, done: any) {
        await this.$axios.post("/couress", row);
        this.$message.success("保存成功！");
        this.feath();
        done();
    }
    /**
     * 更新
     */
    async update(row: any, index: any, done: any) {
        const data = JSON.parse(JSON.stringify(row));
        delete data.$index;
        await this.$axios.put(`/couress/${row._id}`, data);
        this.$message.success("修改成功！");
        this.feath();
        done();
    }
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
