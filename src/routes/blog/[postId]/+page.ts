import type { PageLoad } from './$types';

type BlogPost = {
    metadata: {
        title: string;
        date: string;
    };
    default: string;
};

export const load = (async ({ params }) => {
	const post:BlogPost = await import(`../${params.postId}.md`);
	const { title, date } = post.metadata;
	const content = post.default;

	return {
		content,
		title,
		date
	};
}) satisfies PageLoad;
