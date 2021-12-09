export async function onRequest({ request }) {
	// const value = await env.KV.get("flags");
	// const value = test.TEST.get("click");
	// const value2 = context.env.TEST.get("click");
	// console.log({env});

	// console.log(context.env);
	const { cf } = request;
	return new Response(JSON.stringify(cf, null, 2), { 'Content-Type': 'application/json' });
	// return new Response('value');
}
