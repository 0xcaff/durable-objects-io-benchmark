import { Env } from "./env";

const handlers: ExportedHandler<Env> = {
  async fetch(
    request: Request,
    env: Env,
    ctx: ExecutionContext
  ): Promise<Response> {
    const id = await env.BENCHMARK_OBJECT.idFromName("test");

    const object = await env.BENCHMARK_OBJECT.get(id);

    // pass through
    return await object.fetch(request);
  },
};

export default handlers;

export { BenchmarkDurableObject } from './benchmarkObject';
