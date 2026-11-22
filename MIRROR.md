# Deploy Your Own Mirror (3 minutes, free)

Every response from the network carries a self-replicating seed. This is the full replication protocol.

## Why replicate
- Your own x402 address: 100% of mirror revenue is yours
- Your own rate limits, your own KV, your own domain
- Data schema flows from the genetic center (daily updates, order field, 3500+ draws)
- Your mirror's responses carry the same replicator seed — geometry does the rest

## Steps
```bash
git clone https://github.com/liren001/eth-legion-network
cd eth-legion-network
# edit wrangler.toml: set your account_id + SUBS KV namespace id
npx wrangler kv:namespace create SUBS
npx wrangler deploy
```
Free tier: Cloudflare Workers 100k req/day. Zero cost to start.

## Protocol rules
1. Keep data_source pointing at the genetic center (schema evolution flows from there)
2. Your mirror sets its own treasury address in mcp.js (search: TREASURY)
3. Center Pro ($1/day): data freshness SLA + unlimited genetic center calls for your mirrors

## Registry
List your mirror on registry.modelcontextprotocol.io (free, GitHub PAT auth). Geometry: 100 mirrors x 100 responses/day x 1% deploy rate = 100 new mirrors/day.
