export const siteConfig = {
    siteName: import.meta.env.PUBLIC_SITE_NAME,
    siteUrl: import.meta.env.PUBLIC_SITE_URL,
}

interface NavItem {
    label: string;
    href: string;
    target?: string; // target是可选的，默认为_self或不指定
}

interface Nav {
    avatar?: string;
    items?: NavItem[]; // 使用数组来存储导航项，以便更灵活地添加或删除项
}

// 定义导航项
export const nav: Nav = {
	avatar:'/assets/author.png',
    items: [
        { label: '首页', href: '/', target: '_self' },// target 为 '_blank' 打开新链接
        { label: '项目', href: '/project', target: '_self' },
        { label: '关于', href: '/about', target: '_self' },
        { label: '博客', href: '/blog', target: '_self' },
    ],
};

// Footer
export const footerText = `© ${new Date().getFullYear()} colinwangq. All Rights Reserved.`

//SEO TDK
interface SeoTdk {
	title?: string
	description?: string
	keywords?: string
}
// SEO TDK 首页
export const homeTdk: SeoTdk = {
	title: '见物 — 王权的产品摄影',
	description: '王权的产品摄影作品 — 见物',
	keywords: '王权,产品摄影,见物'
}
// SEO TDK 博客
export const blogTdk: SeoTdk = {
	title: '王权的博客',
	description: '记录我的一些想法和笔记',
	keywords: '王权,摄影,博客,blog'
}
// SEO TDK 关于
export const aboutTdk: SeoTdk = {
	title: '摄影师王权的个人介绍',
	description: '摄影师王权的个人介绍',
	keywords: '王权,摄影,博客'
}
// SEO TDK  项目
export const projectTdk: SeoTdk = {
	title: '王权的作品展示',
	description: '这是我的部分作品展示',
	keywords: '王权,摄影,博客,project'
}
// SEO TDK 404
export const notFoundTdk: SeoTdk = {
	title: '404 Not Found - 这里什么都没有。',
	description: '404 Not Found - 这里什么都没有。',
	keywords: '404 Not Found. 这里什么都没有。'
}

// 社交平台 name：名称  url: 链接 icon：svg图标
export const socialLinks = [
	// 暂时隐藏 GitHub
	// {
	// 	name: 'Github',
	// 	url: 'https://github.com/Chacat68/public-portfolio-site',
	// 	icon: `<svg t="1730125604816" class="icon ic-github ic-social" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12741" width="256" height="256"><path d="M511.957333 21.333333C241.024 21.333333 21.333333 240.981333 21.333333 512c0 216.832 140.544 400.725333 335.573334 465.664 24.490667 4.394667 32.256-10.069333 32.256-23.082667 0-11.690667 0.256-44.245333 0-85.205333-136.448 29.610667-164.736-64.64-164.736-64.64-22.314667-56.704-54.4-71.765333-54.4-71.765333-44.586667-30.464 3.285333-29.824 3.285333-29.824 49.194667 3.413333 75.178667 50.517333 75.178667 50.517333 43.776 75.008 114.816 53.333333 142.762666 40.789333 4.522667-31.658667 17.152-53.376 31.189334-65.536-108.970667-12.458667-223.488-54.485333-223.488-242.602666 0-53.546667 19.114667-97.322667 50.517333-131.669334-5.034667-12.330667-21.930667-62.293333 4.778667-129.834666 0 0 41.258667-13.184 134.912 50.346666a469.802667 469.802667 0 0 1 122.88-16.554666c41.642667 0.213333 83.626667 5.632 122.88 16.554666 93.653333-63.488 134.784-50.346667 134.784-50.346666 26.752 67.541333 9.898667 117.504 4.864 129.834666 31.402667 34.346667 50.474667 78.122667 50.474666 131.669334 0 188.586667-114.730667 230.016-224.042666 242.090666 17.578667 15.232 33.578667 44.672 33.578666 90.453334v135.850666c0 13.141333 7.936 27.605333 32.853334 22.869334C862.250667 912.597333 1002.666667 728.746667 1002.666667 512 1002.666667 240.981333 783.018667 21.333333 511.957333 21.333333z" p-id="12742"></path></svg>`
	// },
	{
		name: 'RSS',
		url: '/rss.xml',
		icon: `<svg t="1730123988138" class="icon ic-rss ic-social " viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11766" width="256" height="256"><path d="M329.143 768q0 45.714-32 77.714t-77.714 32-77.715-32-32-77.714 32-77.714 77.715-32 77.714 32 32 77.714z m292.571 70.286q1.143 16-9.714 27.428-10.286 12-26.857 12H508q-14.286 0-24.571-9.428T472 844.57q-12.571-130.857-105.429-223.714T142.857 515.43q-14.286-1.143-23.714-11.429t-9.429-24.571v-77.143q0-16.572 12-26.857 9.715-9.715 24.572-9.715h2.857q91.428 7.429 174.857 46T472 515.43q65.143 64.571 103.714 148t46 174.857z m292.572 1.143q1.143 15.428-10.286 26.857-10.286 11.428-26.286 11.428H796q-14.857 0-25.429-10T759.43 843.43Q752.57 720.57 701.714 610T569.43 418t-192-132.286T144 227.43q-14.286-0.572-24.286-11.143t-10-24.857v-81.715q0-16 11.429-26.285 10.286-10.286 25.143-10.286H148q149.714 7.428 286.571 68.571t243.143 168q106.857 106.286 168 243.143t68.572 286.572z" p-id="11767"></path></svg>`
	},
	// 需要时可以取消注释以下社交平台
	// {
	//   name: 'Twitter',
	//   url: 'https://x.com/',
	//   icon: `<svg class="ic-twitter icon" width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z" fill="#666666"></path></svg>`
	// },
];

// Page Tag 页面头部的标签 Tag
interface PageTag {
	index: string
	about: string
	blog: string
	project: string
}
export const pageTag: PageTag = {
	index: 'PORTFOLIO',
	about: 'ABOUT',
	blog: 'BLOG',
	project: 'PROJECT'
}


//Page Description 页面大标题下的说明文字
interface PageDescription {
	index?: string
	project?: string
	blog?: string
	about?: string
}
export const pageDescription: PageDescription = {
	index: '见物 — 产品摄影是一种凝视。我是王权，在这里展示我的作品和一些想法。',
	project: "这是我的部分作品展示",
	about: '专注于摄影、视觉叙事和影像创作',
	blog: '这是我的个人笔记和想法， 希望你能够获得帮助！',
}



// FilterItem 首页作品展示筛选列表
export interface FilterItem {
	content: string
	dataGroup: string
}
export const filterItems: FilterItem[] = [
	{ content: "推荐", dataGroup: "recommend" },
	{ content: "摄影", dataGroup: "photography" },
	{ content: "视频", dataGroup: "web" },
	{ content: "品牌", dataGroup: "brand" },
];
