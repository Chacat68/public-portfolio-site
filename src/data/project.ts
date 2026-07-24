export interface ProjectItem {
	id?: number;
	title: string;
	title_en?: string;
	description?: string;
	date?: string;
	/** 详情或外链；可指向首页作品区 */
	detail?: string;
	url?: string;
	tags?: string[];
	/** 本地路径（相对 src/assets/projects/）或完整 URL */
	cover?: string[];
}

/** 摄影系列作品（替代原设计师模板示例） */
export const projectItems: ProjectItem[] = [
	{
		title: '厨房空间',
		title_en: 'Kitchen Space',
		description: '家装厨房场景，强调材质与自然光。',
		date: '2024-07-05',
		detail: '/#works',
		cover: [
			'https://blog-1259751088.cos.ap-shanghai.myqcloud.com/20260624134252329.webp?imageSlim',
		],
		tags: ['空间', '家装'],
	},
	{
		title: '春分',
		title_en: 'Vernal Equinox',
		description: '节气影像短片 — 昼夜均而寒暑平。',
		date: '2023-03-21',
		url: 'https://www.bilibili.com/video/BV19g4y1x7A9',
		detail: 'https://www.bilibili.com/video/BV19g4y1x7A9',
		cover: [
			'https://i2.hdslb.com/bfs/archive/990af910f239464993d51e7f504784276f15f933.jpg',
		],
		tags: ['影像', '节气'],
	},
	{
		title: '清明',
		title_en: 'Qingming',
		description: '节气影像短片 — 万物清洁而明净。',
		date: '2023-04-05',
		url: 'https://www.bilibili.com/video/BV1dc411p79y',
		detail: 'https://www.bilibili.com/video/BV1dc411p79y',
		cover: [
			'https://i0.hdslb.com/bfs/archive/b207aebe6f882db5e70a7e57437709f84a9f792d.jpg',
		],
		tags: ['影像', '节气'],
	},
];
