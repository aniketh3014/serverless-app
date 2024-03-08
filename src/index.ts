export interface Env {

}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext) {
		const body = request.body;
		const headers = request.headers;

		if (request.method === "GET") {
			return Response.json({
				message: "you sent a get request"
			})
		} else {
			return Response.json({
				message: "you did not sent a get request"
			})
		}
	},
};
