---
title: "机场协议对比｜Shadowsocks、Trojan、VLESS、Hysteria2"
description: "机场常见协议对比：Shadowsocks、Trojan、VLESS、Hysteria2 的特点、适用场景与选择建议，以及客户端支持情况。"
h1: "机场协议对比"
lead: "协议决定了数据怎么传输。多数用户不需要选协议，但了解区别有助于排错和选客户端。"
kicker: "PROTOCOL · 协议"
updated: 2026-09-26
keywords: ["机场协议","VLESS","Hysteria2","Trojan","Shadowsocks"]
cardsTitle: "逐个了解"
cards:
  - { href: "/knowledge/what-is-shadowsocks-protocol/", title: "Shadowsocks", desc: "轻量、兼容性好", tag: "协议" }
  - { href: "/knowledge/what-is-trojan-protocol/", title: "Trojan", desc: "伪装 HTTPS 流量", tag: "协议" }
  - { href: "/knowledge/what-is-vless-protocol/", title: "VLESS", desc: "轻量、扩展性强", tag: "协议" }
  - { href: "/knowledge/what-is-hysteria2-protocol/", title: "Hysteria2", desc: "基于 QUIC，弱网表现", tag: "协议" }
faq:
  - q: "协议越新越好吗？"
    a: "不一定。要看服务商支持、客户端支持与你的网络环境，稳定可用比“新”更重要。"
related:
  - { href: "/knowledge/airport-proxy-protocols-explained/", title: "协议详解" }
  - { href: "/setup-guides/", title: "客户端教程" }
---
## 简要对照

| 协议 | 特点 | 客户端支持 |
| --- | --- | --- |
| Shadowsocks | 简单，兼容性好 | 几乎全部 |
| Trojan | 模拟 HTTPS | 主流客户端 |
| VLESS | 轻量，配置灵活 | v2rayN、sing-box 等 |
| Hysteria2 | 基于 QUIC | 新版客户端 |

多数情况下用服务商默认的协议即可。
