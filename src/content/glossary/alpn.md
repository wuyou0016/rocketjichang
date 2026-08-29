---
term: "ALPN（Application-Layer Protocol Negotiation）"
definition: "ALPN 是 TLS 握手过程中的一个扩展字段，用来让客户端和服务器在建立连接时协商接下来使用 HTTP/1.1 还是 HTTP/2 等具体的应用层协议。"
extendedExplanation: "ALPN 本身是通用网络技术标准，不是机场代理专属概念，但因为它是 TLS 握手里可以被观察到的一个字段，在 VLESS+TLS、Trojan 等依赖「伪装成正常 HTTPS 流量」的协议里，ALPN 的取值是否和目标网站真实的表现一致，会影响伪装的完整程度——如果 ALPN 特征和被伪装的网站不符，可能成为流量识别的线索之一。"
relatedTerms: ["reality", "ech"]
updatedAt: 2026-08-29
---

普通用户配置客户端时通常不需要手动理解或调整 ALPN，这个字段一般由客户端和节点配置自动处理。了解它的存在，有助于理解为什么部分协议在"伪装成正常网站流量"时，需要在多个细节字段上都尽量贴近被伪装网站的真实表现，而不只是套用一个证书那么简单。
