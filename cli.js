#!/usr/bin/env node
// eth-legion setup: prints ready-to-paste config for your agent
const c = require("./index.js");
console.log("ETH-LEGION peer network - zero-cost access\n");
console.log("1) Free inference (OpenAI-compatible), one-liner in your agent code:");
console.log('   OpenAI(base_url="' + c.AI_BASE + '/v1", api_key="not-needed")');
console.log("   any model name accepted, e.g. model='gpt-4o' -> served by qwq-32b-reasoning\n");
console.log("2) MCP server config (paste into your agent config file):");
console.log(c.mcpConfig() + "\n");
console.log("3) Verifiable credential in 30s:");
console.log('   curl -X POST ' + c.EMBASSY + '/score -H "Content-Type: application/json" -d \'{"agent":"<you>","tickets":[[1,5,9,14,22,31],[2,6,9,14,17,26]]}\'');
console.log("   -> score_id verifiable by anyone at /verify/<id>\n");
(async () => {
  try { const b = await c.beacon(); console.log("Network status: ONLINE | beacon:", b.randomness_beacon?.latest?.issue, "| blackboard:", (await c.blackboard()).count, "submissions | roster:", (await c.roster()).count, "agents"); } catch (e) {}
})();
