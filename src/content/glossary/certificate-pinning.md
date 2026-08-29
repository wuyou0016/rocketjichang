---
term: "证书锁定（Certificate Pinning）"
definition: "证书锁定是应用在建立 HTTPS 连接时，只信任预先指定的特定证书或公钥，而不是信任系统里所有受信任的证书颁发机构，用来防止连接被中间人（包括某些代理或抓包工具）拦截和篡改。"
extendedExplanation: "这个机制原本是为了保护应用免受中间人攻击，但也会带来一个和代理使用相关的副作用：部分开启了证书锁定的 App（常见于银行、支付类应用）即使你的网络代理配置完全正常，也可能因为证书锁定机制拒绝连接或报错，因为这类 App 不信任代理客户端在中间处理连接时使用的证书。遇到某个特定 App 在开启代理后无法使用、其他网站和 App 都正常的情况，证书锁定是需要考虑的可能原因之一。"
aliases: ["SSL Pinning"]
relatedArticles: ["connection-troubleshooting-step-by-step"]
updatedAt: 2026-08-29
---

如果遇到单个 App 连接异常而其他应用都正常，可以先排除节点和订阅本身的问题（参考[机场连接不上怎么办？从订阅、节点到客户端逐步排查](/troubleshooting/connection-troubleshooting-step-by-step/)），如果排查后确认只有该 App 异常，证书锁定就是一个值得考虑、但普通用户通常无法绕过的技术原因——这种情况下更现实的做法是该 App 使用时暂时不走代理，而不是尝试破解证书锁定机制。
