---
term: "TUN 模式"
definition: "TUN 模式是客户端在系统里创建一个虚拟网卡，把设备上几乎所有的网络流量都接管并转发到代理，而不需要逐个 App 单独设置代理。"
extendedExplanation: "和只处理特定应用、特定端口流量的系统代理模式不同，TUN 模式在网络层工作，理论上能覆盖那些不读取系统代理设置的 App（比如部分游戏、系统自身的网络请求），实现更彻底的全局代理。代价是配置和排查问题相对更复杂——一旦路由规则配置不当，可能导致部分或全部流量无法正常访问网络，出问题时也更难判断具体是哪个环节的问题。"
aliases: ["TUN", "全局模式"]
relatedTerms: ["system-proxy-mode", "rule-set"]
relatedArticles: ["what-is-clash-getting-started", "connection-troubleshooting-step-by-step"]
updatedAt: 2026-08-29
---

不同客户端对 TUN 模式的叫法不完全一样，有的直接标注"TUN"，有的叫"全局模式"或"虚拟网卡模式"，具体操作步骤建议以你使用的客户端官方文档为准，可以先从[Clash 是什么？新手如何开始使用](/tutorials/what-is-clash-getting-started/)了解基础配置流程。如果开启 TUN 模式后出现无法访问网络的情况，可以参考[机场连接不上怎么办？从订阅、节点到客户端逐步排查](/troubleshooting/connection-troubleshooting-step-by-step/)排查思路，也可以先尝试关闭 TUN 模式、切回系统代理模式做对比。
