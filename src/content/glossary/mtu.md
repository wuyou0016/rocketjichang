---
term: "MTU（最大传输单元）"
definition: "MTU 是网络传输中单个数据包允许的最大字节数，如果数据包超过这个限制，会被拆分成多个更小的包再传输，拆分和重组本身会带来额外开销。"
extendedExplanation: "在机场代理场景里，数据经过节点转发时通常会被额外包装（加密、封装协议头等），这会让实际传输的包比原始数据更大；如果客户端和节点之间的 MTU 设置不合理，可能导致数据包被过度分片，进而影响传输效率，甚至在部分网络环境下引发丢包、连接不稳定等问题。多数客户端会使用一个默认的合理 MTU 值，普通用户通常不需要手动调整；只有在遇到特定网络环境下的稳定性问题、且已排除节点和线路本身问题时，才考虑尝试调整 MTU 作为排查手段之一。"
relatedTerms: ["udp-forwarding", "wireguard"]
relatedArticles: ["connection-troubleshooting-step-by-step"]
updatedAt: 2026-08-29
---

调整 MTU 属于相对进阶的排查手段，建议先按[机场连接不上怎么办？从订阅、节点到客户端逐步排查](/troubleshooting/connection-troubleshooting-step-by-step/)里的思路，从订阅、节点、客户端这些更常见的原因排查起，确认都没有问题之后，再考虑是否是 MTU 设置导致的细节问题。
