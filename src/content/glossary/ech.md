---
term: "ECH（Encrypted Client Hello）"
definition: "ECH 是 TLS 协议的一项扩展，用来加密 TLS 握手中原本以明文形式传输的 SNI（目标域名）等信息，防止网络中间设备直接看到你正在访问哪个域名。"
extendedExplanation: "在没有 ECH 的传统 TLS 握手里，即使传输内容本身是加密的，SNI 字段通常仍以明文形式出现，网络运营商或防火墙可以读取 SNI 判断你访问的域名并针对性拦截。ECH 把这部分信息也加密，理论上能提高基于域名做检测和封锁的难度。不过 ECH 的实际生效依赖客户端、服务端以及中间网络设备是否都支持它，目前并非所有浏览器、操作系统和网络环境都已完整启用，具体效果会因环境而异。"
aliases: ["Encrypted Client Hello"]
relatedTerms: ["alpn", "reality", "domain-fronting", "sni"]
updatedAt: 2026-08-29
---

ECH 是一个通用的 TLS 技术标准，由浏览器厂商和标准组织推动，不是机场代理行业专门发明的技术，但因为它直接影响"域名是否会在握手阶段暴露"，也会间接影响基于域名封锁的有效性，因此经常在讨论 Reality、流量伪装等话题时被一并提到。
