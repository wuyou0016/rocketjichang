---
term: "落地 IP"
definition: "落地 IP 指你的设备通过机场节点访问互联网时，目标网站最终看到的那个出口 IP 地址，也就是节点「落地」到公网时使用的 IP。"
extendedExplanation: "「落地 IP」描述的是这个 IP 在网络路径中的位置和作用——数据最终从哪里「冒出来」访问目标网站；而它具体属于哪种类型（家宽 IP、数据中心 IP 等）是另一个维度的问题。两者经常一起被提到，但回答的是不同问题：「落地 IP 是哪个」回答的是「你以什么身份被目标网站看到」，「是不是家宽/原生」回答的是「这个身份的可信度大致如何」。"
aliases: ["出口 IP"]
relatedTerms: ["residential-ip", "datacenter-ip"]
relatedArticles: ["airport-streaming-unlock-explained", "what-is-transit-route"]
updatedAt: 2026-08-29
---

同一个节点标注的地区和它真实的落地 IP 地区不一定完全一致，具体的地区识别逻辑和为什么会出现节点标注地区与实际解锁结果不符的情况，可以参考[机场流媒体解锁是不是真的？怎么判断](/knowledge/airport-streaming-unlock-explained/)。落地 IP 也会随线路方式（直连、中转、专线）的不同而变化，相关基础概念见[什么是中转线路](/knowledge/what-is-transit-route/)。
