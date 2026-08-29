---
term: "Fallback（协议回落）"
definition: "Fallback 是 Trojan、VLESS 等协议在服务端的一种配置机制：当收到的连接请求不是合法的代理流量时，服务端会把这个请求「回落」转发给一个真实网站，而不是直接拒绝连接。"
extendedExplanation: "这个机制的意义在于，即使有人（包括审查探测工具）直接扫描或访问代理节点的 IP 和端口，看到的也是一个正常网站的响应，而不是明显的「这是一台代理服务器」的特征，从而降低节点被针对性识别和封锁的概率。Fallback 的配置通常由服务商在节点部署时完成，普通用户不需要自己配置，但了解这个机制有助于理解为什么直接访问某些机场节点的 IP，看到的会是一个和代理服务毫不相关的网站。"
aliases: ["协议回落"]
relatedTerms: ["reality"]
relatedArticles: ["what-is-trojan-protocol", "what-is-vless-protocol"]
updatedAt: 2026-08-29
---

Fallback 常和 Trojan 的"伪装成正常 HTTPS 流量"设计思路一起出现，可以先了解[Trojan 是什么？机场配置中的 Trojan 协议怎么理解](/knowledge/what-is-trojan-protocol/)里对流量伪装的基础说明；VLESS 搭配 Reality 使用时，也会用到类似的回落思路，可以参考[VLESS 是什么](/knowledge/what-is-vless-protocol/)。
