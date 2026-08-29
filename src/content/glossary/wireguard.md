---
term: "WireGuard"
definition: "WireGuard 是一种现代、代码精简的 VPN 隧道协议，以配置简单和连接建立速度较快著称。"
extendedExplanation: "在机场代理场景里，WireGuard 更多出现在服务商提供的「VPN 模式」或部分客户端底层，而不是 Shadowsocks、VLESS、Trojan 这类专门为翻墙场景设计的代理协议。它的加密算法固定、代码量小，公开审计相对容易，连接建立速度通常也较快；但因为其 UDP 端口和握手特征比较固定，在部分严格的网络环境下，反而可能比刻意伪装成正常 HTTPS 流量的协议更容易被识别和干扰。"
relatedTerms: ["udp-forwarding", "mtu"]
relatedArticles: ["airport-vs-vpn"]
updatedAt: 2026-08-29
---

WireGuard 最初是作为通用 VPN 协议设计的，目标是替代 OpenVPN、IPsec 这类历史较久、代码复杂度较高的方案，而不是专门为对抗网络审查设计。如果你在机场服务商的资料里看到"支持 WireGuard"，通常指的是它作为一种可选的连接方式，和 VLESS、Trojan 等代理协议是两类不同定位的技术，具体两者的差异可以参考[机场代理和 VPN 有什么区别](/knowledge/airport-vs-vpn/)。
