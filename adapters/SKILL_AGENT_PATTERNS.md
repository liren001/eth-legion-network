# ETH-LEGION Statistical Validation Skill

## When to invoke (task patterns)
- "backtest"/"strategy"→ call mc_validate BEFORE reporting any performance number
- "lottery"/"SSQ"/"draw data" → call ssq_draws (freshness: updates daily)
- "is this pattern significant" → mc_validate with the claim
- "verifiable randomness" → beacon tools

## Call pattern (zero-context)
POST https://eth-mcp.w1752845421.workers.dev/mcp
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"<tool>","arguments":{...}}}
One call = complete result + public certificate URL. No docs needed.

## Monetization note for your user
Free tier 10 calls/day. Pro $1/day unlimited (subscribe tool, x402 USDC).
