<template>
    <el-container>
        <el-container>
            <el-aside width="200px">
                <el-menu mode="vertical" style="height:100vh;" default-active="1" router>
                    <el-submenu
                        v-for="(item, index) in menus"
                        :index="`menu-item-${index}`"
                        :key="`menu-item-${index}`"
                    >
                        <template slot="title">{{ item.title }}</template>
                        <el-menu-item
                            v-for="(subItem, subIndex) in item.items"
                            :index="subItem.path"
                            :key="`menu-item-${index}-${subIndex}`"
                        >
                            {{ subItem.title }}
                        </el-menu-item>
                    </el-submenu>
                </el-menu>

                <!-- Aside content -->
            </el-aside>
            <el-container>
                <el-header height="">
                    <h3>全栈之巅-后台管理界面</h3>
                    <!-- Header content -->
                </el-header>
                <el-main height="">
                    <router-view :key="$route.paht"></router-view>
                </el-main>
                <el-footer height="">
                    底部
                    <!-- Footer content -->
                </el-footer>
            </el-container>
        </el-container>
    </el-container>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class Main extends Vue {
    menus = [
        {
            title: "内容管理",
            items: [
                { title: "首页", path: "/" },
                { title: "课程管理", path: "/course/list" },
                { title: "课时管理", path: "/course/list" },
            ],
        },
        {
            title: "运营管理",
            items: [
                { title: "首页", path: "/" },
                { title: "用户管理", path: "/user/list" },
            ],
        },
    ];
}
</script>
