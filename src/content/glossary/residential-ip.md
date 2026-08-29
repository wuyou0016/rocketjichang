---
term: "家宽 IP"
definition: "家宽 IP 指由本地宽带运营商实际分配给住宅用户使用的 IP 地址，而不是数据中心或云服务商批量购买、专门用于服务器和代理业务的 IP 段。"
extendedExplanation: "流媒体平台、部分网站的风控系统在判断一个访问请求是否来自「真实用户」时，IP 地址的归属类型是重要参考依据之一——家宽 IP 通常被判定为普通用户的概率更高，因此在流媒体解锁、规避风控等场景下表现往往优于数据中心 IP。但家宽 IP 的获取和维护成本也更高（通常需要服务商自建或采购住宅宽带线路），不是所有机场节点都使用家宽 IP，具体某个节点是不是家宽 IP，需要看服务商自己的说明，普通用户很难单独核实。"
aliases: ["住宅 IP"]
relatedTerms: ["exit-ip", "datacenter-ip"]
relatedArticles: ["airport-streaming-unlock-explained"]
updatedAt: 2026-08-29
---

"家宽 IP"和"原生 IP"这两个词在机场行业里经常混用，指向的都是"这个 IP 段看起来像普通宽带用户，而不是数据中心"这个核心特点，具体的判定标准和识别逻辑，可以看[机场流媒体解锁是不是真的？怎么判断](/knowledge/airport-streaming-unlock-explained/)里对原生 IP 的完整说明，这里不重复展开。
