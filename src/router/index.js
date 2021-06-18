import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/views/homepage';
import Notice from '@/views/notice';
import Member from '@/views/member';
import Article from '@/views/articles';
import Patent from '@/views/patent';
import Project from '@/views/project';
import Activity from '@/views/activity';
import Joinus from '@/views/joinus';
import Git from '@/views/Gitee';
import Resource from '@/views/resourceandlink';
import FirstNotice from "@/views/notice/DetailNotice/firstNotice";
import SecondNotice from "@/views/notice/DetailNotice/secondNotice";
import ActivityDetail from "@/views/activity/activityDetail";
import PersonalWeblxg from "@/views/PersonalWeb/lxg";
import PersonalWebzs from "@/views/PersonalWeb/zs";
import PersonalWebxzy from "@/views/PersonalWeb/xzy";
import ProjectInfo from '@/views/project/ProjectInfo';

import StudentInfo from "@/views/PersonalWeb/student"

Vue.use(Router)

export default new Router({
    routes: [{
            name: 'Home',
            path: '/', //首页
            components: {
                default: HomePage,
            }
        },
        {
            name: 'Notice',
            path: '/notice', //公告
            components: {
                default: Notice,
            }
        },
        {
            name: 'noticeDetail',
            path: '/notice/first-notice', //公告详情
            components: {
                default: FirstNotice,
            }
        },
        {
            name: 'noticeDetail',
            path: '/notice/second-notice', //公告详情
            components: {
                default: SecondNotice,
            }
        },
        {
            name: 'Member',
            path: '/member', //成员
            components: {
                default: Member,
            }
        },
        {
            name: 'Articles',
            path: '/articles', //论文
            components: {
                default: Article,
            }
        },
        {
            name: 'Patent',
            path: '/patent', //专利
            components: {
                default: Patent,
            }
        },
        {
            name: 'Project',
            path: '/project', //项目
            components: {
                default: Project,
            }
        },
        //项目详情路由
        {
            name: 'ProjectInfo',
            path: '/project/:id',
            components: {
                default: ProjectInfo
            }
        },
        {
            name: 'Activity',
            path: '/activity', //活动
            components: {
                default: Activity,
            }
        },
        {
            name: 'activityDetail',
            path: '/activity/:id',
            components: {
                default: ActivityDetail
            }
        },
        {
            name: 'JoinUs',
            path: '/joinus', //加入我们
            components: {
                default: Joinus,
            }
        },
        {
            name: 'Git',
            path: '/git', //gitee/github
            components: {
                default: Git,
            }
        },
        {
            name: 'Resource',
            path: '/resource', //资源和链接
            components: {
                default: Resource,
            }
        },
        {
            path: "/teacher/lxg",
            component: PersonalWeblxg
        },
        {
            path: "/teacher/zs",
            component: PersonalWebzs
        },
        {
            path: "/teacher/xzy",
            component: PersonalWebxzy
        },
        
        

        {
            path:"/student/:name",
            component: StudentInfo
        }
    ],
    mode: 'hash'
})