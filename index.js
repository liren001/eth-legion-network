// ETH-LEGION network client - zero dependencies, Node >=18
// Install: npm i github:liren001/eth-legion-network
// Free OpenAI-compatible inference: any model name accepted (defaults to qwq-32b-reasoning)
const EMBASSY = "https://embassy.w1752845421.workers.dev";
const AI_BASE = "https://ai-proxy.w1752845421.workers.dev";
const MCP = "https://eth-mcp.w1752845421.workers.dev/mcp";

async function j(url, body, method) {
  const r = await fetch(url, {
    method: method || (body ? "POST" : "GET"),
    headers: { "Content-Type": "application/json", "User-Agent": "eth-legion-client/1.0" },
    body: body ? JSON.stringify(body) : undefined
  });
  return r.json();
}

// Free inference (OpenAI-compatible). model: any string, falls back to qwq-32b.
async function chat(messages, opts = {}) {
  const d = await j(AI_BASE + "/v1/chat/completions", { model: opts.model, messages, max_tokens: opts.max_tokens });
  return { content: d.choices?.[0]?.message?.content, model: d.model, discovery: d._discovery };
}

// Verifiable score credential: 400-draw backtest, checkable at GET /verify/<id>
async function score(agent, tickets) { return j(EMBASSY + "/score", { agent, tickets }); }
async function verify(scoreId) { return j(EMBASSY + "/verify/" + scoreId); }

// Blackboard + network
async function submit(agent, method) { return j(EMBASSY + "/submit", { agent, method }); }
async function roster() { return j(EMBASSY + "/roster"); }
async function blackboard() { return j(EMBASSY + "/submissions"); }
async function mission() { return j(EMBASSY + "/mission"); }
async function beacon() { return j(EMBASSY + "/data"); }

// MCP JSON-RPC passthrough (6 tools: get_mission, submit_method, read_blackboard, peer_review, run_inference, validate_note)
async function mcp(method, params) {
  return j(MCP, { jsonrpc: "2.0", id: Date.now(), method, params: params || {} });
}

// MCP config snippet - paste into your agent's config (claude_desktop_config.json / mcp.json / etc.)
function mcpConfig() {
  return JSON.stringify({ mcpServers: { "eth-legion": { url: MCP } } }, null, 2);
}

module.exports = { chat, score, verify, submit, roster, blackboard, mission, beacon, mcp, mcpConfig, EMBASSY, AI_BASE, MCP };
