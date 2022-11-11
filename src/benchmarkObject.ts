import { Env } from "./env";

// todo: sequential read
// todo: sequential write
// todo: random write
// todo: rando m read

export class BenchmarkDurableObject implements DurableObject {
  state: DurableObjectState;

  constructor(state: DurableObjectState, env: Env) {
    this.state = state;
  }

  async fetch(request: Request): Promise<Response> {
    return new Response("hello from durable object");
  }
}
