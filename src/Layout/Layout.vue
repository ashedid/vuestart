import { router } from 'json-server';
<template>
    <div class="common-layout">
        <el-container>
            <el-aside width="200px">


                <el-menu default-active="2" class="el-menu-vertical-demo" >
                    <el-sub-menu index="1">
                        <template #title>
                            <el-icon>
                                <!-- <location /> -->
                            </el-icon>
                            <span>Navigator One</span>
                        </template>
                        <el-menu-item-group title="Group One">
                            <el-menu-item index="1-1">item one</el-menu-item>
                            <el-menu-item index="1-2">item two</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="Group Two">
                            <el-menu-item index="1-3">item three</el-menu-item>
                        </el-menu-item-group>
                        <el-sub-menu index="1-4">
                            <template #title>item four</template>
                            <el-menu-item index="1-4-1">item one</el-menu-item>
                        </el-sub-menu>
                    </el-sub-menu>
                    <el-menu-item index="2">
                        <el-icon><icon-menu /></el-icon>
                        <span>Navigator Two</span>
                    </el-menu-item>
                    <el-menu-item index="3">
                        <router-link to="/counter">

                            <el-icon>

                            </el-icon>
                            <span>counter</span>
                        </router-link>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <router-link to="/todolist">


                            <el-icon>
                          
                            </el-icon>
                            <span>To do</span>
                        </router-link>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-container>
                <el-header>
                    <el-breadcrumb separator="/">
                        <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
                        <el-breadcrumb-item><a href="/">promotion management</a></el-breadcrumb-item>
                        <el-breadcrumb-item>promotion list</el-breadcrumb-item>
                        <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
                    </el-breadcrumb>
                </el-header>














                <el-main>

                    <router-view></router-view>


                </el-main>
            </el-container>
        </el-container>
    </div>
</template>