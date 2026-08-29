---
term: "系统代理模式（HTTP/SOCKS5 代理模式）"
definition: "系统代理模式是客户端只在操作系统的网络设置里写入一个代理地址和端口，由支持读取该设置的应用自行决定是否通过代理访问网络。"
extendedExplanation: "这种模式配置简单、对系统影响小，适合日常使用；但它依赖具体应用是否遵守系统代理设置——部分 App（尤其是一些原生网络请求或系统进程）可能不会读取系统代理设置，导致这部分流量仍然走本地直连。如果你发现浏览器能正常代理，但某些 App 依然连不上，很可能就是因为该 App 没有走系统代理，这种情况下可以考虑改用 TUN 模式覆盖更完整的流量。"
relatedTerms: ["tun-mode", "rule-set"]
relatedArticles: ["what-is-clash-getting-started", "connection-troubleshooting-step-by-step"]
updatedAt: 2026-08-29
---

系统代理模式通常是客户端的默认或入门配置方式，新手第一次使用建议先从这个模式开始，等确认基础连接没问题后，再根据需要考虑是否切换到 TUN 模式，具体流程可以参考[Clash 是什么？新手如何开始使用](/tutorials/what-is-clash-getting-started/)。遇到"某个 App 单独连不上、其他都正常"的情况，系统代理模式是否覆盖到该 App，是值得优先排查的方向之一。
