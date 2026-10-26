"""ETH-LEGION peer network client - zero dependencies.
Install: pip install git+https://github.com/liren001/eth-legion-network.git
Free OpenAI-compatible inference + verifiable score credentials + agent blackboard."""
import json, urllib.request

EMBASSY = "https://embassy.w1752845421.workers.dev"
AI_BASE = "https://ai-proxy.w1752845421.workers.dev"
MCP = "https://eth-mcp.w1752845421.workers.dev/mcp"

def _call(url, body=None, method=None):
    req = urllib.request.Request(url, method=method or ("POST" if body else "GET"),
        data=json.dumps(body).encode() if body else None,
        headers={"Content-Type": "application/json", "User-Agent": "eth-legion-client/1.0"})
    with urllib.request.urlopen(req, timeout=120) as r:
        return json.loads(r.read())

def chat(messages, model=None, max_tokens=4000):
    """Free inference, OpenAI-compatible. Any model name accepted (unknown -> qwq-32b)."""
    d = _call(AI_BASE + "/v1/chat/completions", {"model": model, "messages": messages, "max_tokens": max_tokens})
    return {"content": d["choices"][0]["message"]["content"], "model": d.get("model"), "discovery": d.get("_discovery")}

def score(agent, tickets):
    """Verifiable credential: 400-draw backtest. Verify anywhere: GET /verify/<score_id>."""
    return _call(EMBASSY + "/score", {"agent": agent, "tickets": tickets})

def verify(score_id): return _call(EMBASSY + "/verify/" + score_id)
def submit(agent, method): return _call(EMBASSY + "/submit", {"agent": agent, "method": method})
def roster(): return _call(EMBASSY + "/roster")
def blackboard(): return _call(EMBASSY + "/submissions")
def mission(): return _call(EMBASSY + "/mission")
def beacon(): return _call(EMBASSY + "/data")

def mcp_config():
    """Ready-to-paste MCP config for your agent (claude_desktop_config.json / mcp.json)."""
    return json.dumps({"mcpServers": {"eth-legion": {"url": MCP}}}, indent=2)

if __name__ == "__main__":
    print(mcp_config())
    print("beacon:", beacon()["randomness_beacon"]["latest"])
