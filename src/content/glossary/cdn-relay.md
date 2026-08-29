---
term: "CDN 中转"
definition: "CDN 中转指机场节点通过 CDN（内容分发网络）服务商提供的边缘节点做一层转发，客户端实际连接的是 CDN 的地址，再由 CDN 把流量转发到真正的机场服务器。"
extendedExplanation: "这种做法的常见目的是隐藏机场服务器的真实 IP、借助 CDN 服务商本身庞大且分散的 IP 池增加被封锁的难度，同时也可能利用 CDN 节点离用户更近的特点改善连接建立速度。但 CDN 中转会带来额外的一跳转发开销，最终体验还要取决于 CDN 节点本身的质量、以及 CDN 到机场真实服务器之间那一段线路的情况，不能简单认为「用了 CDN 中转就一定更安全或更快」。"
relatedTerms: ["domain-fronting"]
relatedArticles: ["what-is-transit-route"]
updatedAt: 2026-08-29
---

需要注意，这里的"中转"和[什么是中转线路？直连、中转和专线有什么区别](/knowledge/what-is-transit-route/)里讲的服务商自建中转节点，是两个不同层面的概念——CDN 中转特指借助第三方 CDN 服务商做的一层转发，属于架构实现细节，普通用户通常不需要、也难以直接判断某个节点是否使用了 CDN 中转。
