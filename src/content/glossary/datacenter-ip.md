---
term: "IDC IP（数据中心 IP）"
definition: "IDC IP 指由数据中心、云服务商批量分配、主要用于服务器和商业用途的 IP 地址段，和分配给住宅宽带用户的 IP 在归属类型上不同。"
extendedExplanation: "很多网站和流媒体平台会维护数据中心 IP 段的名单，对来自这类 IP 的访问请求采取更严格的验证甚至直接拒绝，因为大量代理、爬虫、批量注册等行为都使用数据中心 IP。机场节点的服务器本身通常也部署在数据中心，如果服务商没有额外做家宽/原生 IP 的处理，节点的落地 IP 大概率就是 IDC IP，这也是为什么部分服务商会特别强调自己的节点是「原生 IP」或「家宽 IP」，以此和普通 IDC IP 区分。"
aliases: ["机房 IP", "数据中心 IP"]
relatedTerms: ["residential-ip", "exit-ip"]
relatedArticles: ["airport-streaming-unlock-explained"]
updatedAt: 2026-08-29
---

节点是不是 IDC IP，普通用户很难仅凭节点名称或宣传语判断，更实际的做法是自己连接后实际测试流媒体、常用服务的访问效果，具体验证思路可以参考[机场流媒体解锁是不是真的？怎么判断](/knowledge/airport-streaming-unlock-explained/)。
