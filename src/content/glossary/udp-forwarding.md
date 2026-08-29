---
term: "UDP 转发"
definition: "UDP 转发指代理节点除了处理常见的 TCP 流量外，还能把基于 UDP 协议的数据包也转发到目标地址，让依赖 UDP 的应用（比如在线游戏、部分语音通话、基于 QUIC 的服务）也能通过代理正常使用。"
extendedExplanation: "不是所有机场节点或所有协议都天然支持完整的 UDP 转发——早期的一些代理协议主要为 TCP 流量设计，UDP 支持是后续陆续补上的能力，具体支持程度因客户端、协议实现而异。如果你需要用机场代理玩游戏或使用依赖 UDP 的服务，建议提前确认节点是否明确支持 UDP 转发，而不是默认所有代理节点都能处理好这部分流量。基于 QUIC 设计的协议（比如 Hysteria2）本身就建立在 UDP 之上，天然涉及 UDP 转发能力。"
relatedTerms: ["mtu", "port-hopping"]
relatedArticles: ["what-is-hysteria2-protocol"]
updatedAt: 2026-08-29
---

如果你发现网页和大部分应用都能正常使用，但某些依赖 UDP 的场景（比如游戏对战、视频通话）表现异常，UDP 转发支持情况是值得优先排查的方向。基于 UDP/QUIC 的协议特点，可以参考[Hysteria2 是什么协议？和 VLESS、Trojan 有什么区别](/knowledge/what-is-hysteria2-protocol/)。
