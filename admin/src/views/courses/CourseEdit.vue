<template>
    <div>
        <h3>{{ isNew ? "创建" : "编辑" }}课程</h3>
        <ele-form :form-data="data" :form-desc="fields" :request-fn="handleRequest"> </ele-form>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class CourseEdit extends Vue {
    @Prop(String) id!: string;

    data = {};
    fields = {
        name: { label: "课程名称", type: "input" },
        caver: { label: "课程封面图", type: "input" },
    };
    async handleRequest(data: any) {
        this.isNew ? this.submit(data) : this.update(data);
    }
    async update(data: any) {
        await this.$axios.put(`/couress/${this.id}`, data);
        this.$message.success("修改成功！");
        this.data = {};
        this.$router.go(-1);
    }

    async submit(data: any) {
        this.data = {};
        await this.$axios.post("/couress", data);
        this.$message.success("保存成功！");
        this.$router.go(-1);
    }
    async feath() {
        let res = await this.$axios.get(`/couress/${this.id}`);
        this.data = res.data;
    }
    get isNew() {
        return !this.id;
    }

    created() {
        !this.isNew && this.feath();
    }
}
</script>

<style></style>
