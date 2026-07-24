export const siteConfig = {
    siteName: import.meta.env.PUBLIC_SITE_NAME || '观世界',
    siteUrl: import.meta.env.PUBLIC_SITE_URL,
}

interface NavItem {
    label: string;
    href: string;
    target?: string;
}

interface Nav {
    avatar?: string;
    items?: NavItem[];
}

/** 主导航：博客降为页脚次要入口 */
export const nav: Nav = {
	avatar:'https://blog-1259751088.cos.ap-shanghai.myqcloud.com/20260624134214913.webp?imageSlim',
    items: [
        { label: '首页', href: '/', target: '_self' },
        { label: '作品', href: '/project', target: '_self' },
        { label: '关于', href: '/about', target: '_self' },
    ],
};

export const footerText = `© ${new Date().getFullYear()} 观世界 · 王权. All Rights Reserved.`

interface SeoTdk {
	title?: string
	description?: string
	keywords?: string
}

export const homeTdk: SeoTdk = {
	title: '观世界 — 王权的产品摄影',
	description: '观世界：产品静物、空间场景与影像短片。摄影师王权，承接品牌与商业拍摄。',
	keywords: '王权,产品摄影,空间摄影,观世界,商业摄影'
}

export const blogTdk: SeoTdk = {
	title: '观世界 · 博客',
	description: '摄影师王权的笔记与创作想法',
	keywords: '王权,摄影,博客'
}

export const aboutTdk: SeoTdk = {
	title: '关于 — 观世界 · 王权',
	description: '产品与空间摄影师王权的简介与合作方式',
	keywords: '王权,产品摄影,合作,预约拍摄'
}

export const projectTdk: SeoTdk = {
	title: '作品系列 — 观世界',
	description: '产品、空间与影像系列作品',
	keywords: '王权,产品摄影,作品集,观世界'
}

export const notFoundTdk: SeoTdk = {
	title: '404 Not Found - 这里什么都没有。',
	description: '404 Not Found - 这里什么都没有。',
	keywords: '404 Not Found. 这里什么都没有。'
}

export const socialLinks = [
	{
		name: 'Bilibili',
		url: 'https://space.bilibili.com/249294453',
		icon: `<svg class="ic-bilibili ic-social" width="20" height="20" viewBox="0 0 20 20" fill="" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.73252 3.67094C4.33229 3.28484 4.33229 2.64373 4.73252 2.25764C5.11291 1.89068 5.71552 1.89068 6.09591 2.25764L8.21723 4.30403C8.27749 4.36218 8.32869 4.4261 8.37081 4.49407H11.5789C11.6211 4.4261 11.6723 4.36218 11.7325 4.30403L13.8538 2.25764C14.2342 1.89068 14.8368 1.89068 15.2172 2.25764C15.6175 2.64373 15.6175 3.28484 15.2172 3.67094L14.364 4.49407H15C17.2091 4.49407 19 6.28493 19 8.49407V13.9996C19 16.2087 17.2091 17.9996 15 17.9996H5C2.79086 17.9996 1 16.2087 1 13.9996V8.49406C1 6.28492 2.79086 4.49407 5 4.49407H5.58579L4.73252 3.67094ZM5 6.42343C3.89543 6.42343 3 7.31886 3 8.42343V14.0702C3 15.1748 3.89543 16.0702 5 16.0702H15C16.1046 16.0702 17 15.1748 17 14.0702V8.42343C17 7.31886 16.1046 6.42343 15 6.42343H5ZM6 10.3175C6 9.76519 6.44772 9.31747 7 9.31747C7.55228 9.31747 8 9.76519 8 10.3175V11.2115C8 11.7638 7.55228 12.2115 7 12.2115C6.44772 12.2115 6 11.7638 6 11.2115V10.3175ZM13 9.31747C12.4477 9.31747 12 9.76519 12 10.3175V11.2115C12 11.7638 12.4477 12.2115 13 12.2115C13.5523 12.2115 14 11.7638 14 11.2115V10.3175C14 9.76519 13.5523 9.31747 13 9.31747Z"></path></svg>`
	},
	{
		name: 'RSS',
		url: '/rss.xml',
		icon: `<svg t="1730123988138" class="icon ic-rss ic-social " viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11766" width="256" height="256"><path d="M329.143 768q0 45.714-32 77.714t-77.714 32-77.715-32-32-77.714 32-77.714 77.715-32 77.714 32 32 77.714z m292.571 70.286q1.143 16-9.714 27.428-10.286 12-26.857 12H508q-14.286 0-24.571-9.428T472 844.57q-12.571-130.857-105.429-223.714T142.857 515.43q-14.286-1.143-23.714-11.429t-9.429-24.571v-77.143q0-16.572 12-26.857 9.715-9.715 24.572-9.715h2.857q91.428 7.429 174.857 46T472 515.43q65.143 64.571 103.714 148t46 174.857z m292.572 1.143q1.143 15.428-10.286 26.857-10.286 11.428-26.286 11.428H796q-14.857 0-25.429-10T759.43 843.43Q752.57 720.57 701.714 610T569.43 418t-192-132.286T144 227.43q-14.286-0.572-24.286-11.143t-10-24.857v-81.715q0-16 11.429-26.285 10.286-10.286 25.143-10.286H148q149.714 7.428 286.571 68.571t243.143 168q106.857 106.286 168 243.143t68.572 286.572z" p-id="11767"></path></svg>`
	},
];

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
	project: 'WORKS'
}

interface PageDescription {
	index?: string
	project?: string
	blog?: string
	about?: string
}
export const pageDescription: PageDescription = {
	index: '观世界 — 产品摄影是一种凝视。',
	project: '按系列浏览产品、空间与影像作品',
	about: '产品与空间的商业影像合作',
	blog: '创作笔记与拍摄随想',
}

export interface FilterItem {
	content: string
	dataGroup: string
}

/** 筛选项文案面向客户；dataGroup 对应 home.json 的 category */
export const filterItems: FilterItem[] = [
	{ content: '精选', dataGroup: 'recommend' },
	{ content: '静物与空间', dataGroup: 'photography' },
	{ content: '影像', dataGroup: 'video' },
];
