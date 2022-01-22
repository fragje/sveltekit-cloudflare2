export async function onRequest({ request, env }) {
	// const value = await env.KV.get("flags");
	// const value = test.TEST.get("click");
	// const value2 = context.env.TEST.get("click");
	// console.log({env});

	// const value = await env.KV.get("flags");
	// console.log(env, value);

	// await env.KV.put("flags", "test");
	const task = await env.KV.get("click");
  return new Response(task);


	// const { cf } = request;
	// return new Response(JSON.stringify({...cf, value}, null, 2), { 'Content-Type': 'application/json' });
	// return new Response(JSON.stringify({ test: 'hei', request, env }));
	// return new Response('value');
}
