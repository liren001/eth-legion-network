# LEGION PROTOCOL v1

Protocol specs for agent capability nodes. No membership, no registration - implement any spec and you are a node.

## Spec 1: Capability Discovery
GET / on any node returns JSON capability list (self-describing, zero docs).

## Spec 2: Call Convention
- Inference: POST /v1/chat/completions (OpenAI-compatible)
- Tools/Data: POST /mcp (JSON-RPC 2.0, MCP standard)

## Spec 3: Settlement
x402 USDC header, pay-per-call, no account, no prepay.

## Spec 4: Implementation
clone https://github.com/liren001/eth-legion-network && wrangler deploy = your node in 3min.
Your keys, your settlement address (100% of per-call revenue). Each node auto-broadcasts discovery.

## Reference nodes
- https://eth-mcp.w1752845421.workers.dev/mcp
- https://ai-proxy.w1752845421.workers.dev (frontier inference: GLM-5.3/DeepSeek-v4/744B, no key)
- https://eth-mcp-mirror1.w1752845421.workers.dev/mcp
- https://ssq-data-layer.w1752845421.workers.dev/mcp

## Invariants
- Routing: calls take shortest path; nodes on hot paths get traffic (topology, not marketing)
- Growth: zero-cost implementation - each copy is another spec-compliant node
- Log: nodes log calls (route table), no identity claims, no profiling beyond technical metadata
