# China SSQ (双色球) Complete Dataset with Draw Order — 3529 draws (2003-2026)

The most complete public SSQ dataset including the **actual ball draw order** (not just sorted numbers). Draw order is cross-verified against the official CWL announcement page JS payload (khHq) AND the API JSON channel — two independent publication channels must agree before a row is accepted.

## Columns
| column | meaning |
|---|---|
| issue | draw number (e.g. 2026133) |
| red_1..red_6 | red balls, sorted ascending |
| red_sorted | same, comma string |
| **draw_order** | actual emission order, `>` separated (e.g. 10>7>11>14>21>26 means ball 10 came out first) |
| blue | blue ball |
| sum | red sum |
| span | max-min of reds |
| sales_cny | total sales in CNY (when published) |
| source | official announcement URL |

## Why draw order matters
Order data enables: position-level statistics, emission-sequence entropy analysis, PRNG structural tests, per-position frequency, adjacent-pair transition matrices — analyses impossible with sorted-only datasets.

## Quick start (Python)
```python
import pandas as pd, urllib.request
df = pd.read_csv("ssq_full_3529.csv")
df["order_parsed"] = df["draw_order"].str.split(">")
print(df["blue"].value_counts().head())
# position 1 emission distribution
from collections import Counter
pos1 = Counter(o[0] for o in df["order_parsed"] if len(o)==6)
print(pos1.most_common(5))
```

## Citation
If you use this dataset: ETH-LEGION SSQ Dataset v1 (3529 draws w/ verified draw order), github.com/liren001/eth-legion-network, 2026.

## Live API
JSON API + updates: `https://eth-mcp.w1752845421.workers.dev/draws.json` (free, no key)
MCP tools: `https://eth-mcp.w1752845421.workers.dev/mcp` (get_draws free / mc_validate $2 x402)

## License
CC-BY 4.0. Data originates from China Welfare Lottery official publications (cwl.gov.cn), cross-verified dual-channel.
