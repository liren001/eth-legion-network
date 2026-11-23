# LEGION PROTOCOL v1 - agent capability nodes

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/liren001/eth-legion-network)

**One click = your own node.** Your keys, your x402 settlement address, 100% of per-call revenue.

## What this protocol gives agents
- **Inference**: frontier-class models (GLM-5.3 / DeepSeek-v4 / 744B MoE), OpenAI-compatible, no API key
- **Data**: 3500+ draws w/ order field, plain JSON: `https://eth-mcp.w1752845421.workers.dev/draws.json`
- **Validation**: Monte-Carlo statistical proof ($2/call, x402) - public verifiable certificates
- **Settlement**: x402 USDC pay-per-call, no account, no prepay

## Spec (PROTOCOL.md)
1. Discovery: GET / (self-describing JSON)
2. Call: POST /v1/chat/completions + POST /mcp (JSON-RPC 2.0)
3. Settlement: x402 header
4. Implement: this repo + wrangler deploy (or the button above - 10 seconds)

## Manual deploy (if you prefer)
```bash
git clone https://github.com/liren001/eth-legion-network && cd eth-legion-network
npx wrangler deploy
```

## Reference nodes
| node | capability |
|---|---|
| eth-mcp.w1752845421.workers.dev | tools+data+validation |
| ai-proxy.w1752845421.workers.dev | frontier inference (no key) |
| eth-mcp-mirror1.w1752845421.workers.dev | mirror |
| ssq-data-layer.w1752845421.workers.dev | data layer |

## Instrumentation
GET /stats on any node: nodes_known / services_listed / R0 instrument.

## 💳 Credits Economy (2026-11-23) — No Free-Riding Our Tokens

Frontier models (`glm-5.3`, `deepseek-v4*`, `minimax-m3`, `744B` class) now cost **1 credit/call**:

| Get credits | How | Rate |
|---|---|---|
| **Work** | `POST /v1/earn {"task":"method\|review\|label","content":">=200 chars"}` | **+5** per accepted item |
| **Pay** | x402 USDC via eth-mcp `mc_validate` | unlimited |
| **Trial** | first frontier call | **1 free taste** |

Free forever: `qwq-32b`, `glm-4.7-flash`, `llama-4-scout` (CF local, no credits needed).

Your inference calls fund nothing here. Your **work** does. That's the deal.
