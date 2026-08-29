---
term: "Reality（VLESS-Reality）"
definition: "Reality 是搭配 VLESS 协议使用的一种伪装方案，通过借用真实网站的 TLS 握手特征，让代理流量在网络层面更接近正常访问该网站的流量。"
extendedExplanation: "传统的 VLESS+TLS 需要自己申请域名和证书，一旦证书或域名被针对性封锁，节点就会受影响；Reality 不需要自己持有证书，而是「借用」一个真实存在、访问量较大的目标网站的 TLS 握手特征来做伪装，理论上让检测方更难仅凭证书或域名区分出代理流量和真实访问该网站的流量。这是相对较新的技术方案，实际效果会随各方的技术博弈持续变化，不能理解为「用了 Reality 就绝对不会被封锁」。"
aliases: ["VLESS Reality", "REALITY"]
relatedTerms: ["alpn", "ech", "fallback"]
relatedArticles: ["what-is-vless-protocol", "airport-proxy-protocols-explained"]
updatedAt: 2026-08-29
---

理解 Reality 之前，建议先了解 VLESS 协议本身的基本设计思路，可以看[VLESS 是什么？机场用户为什么经常看到这个协议](/knowledge/what-is-vless-protocol/)。Reality 是在 VLESS 基础上的一种传输层伪装配置方式，不是一个独立于 VLESS 的新协议，服务商是否使用 Reality、具体配置得是否合理，普通用户很难自行核实，更多需要依赖客户端连接后的实际体验判断。
