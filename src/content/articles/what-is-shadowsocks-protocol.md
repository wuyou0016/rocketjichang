---
type: "knowledge"
title: "Shadowsocks（SS）是什么？机场里常见的 SS 协议怎么用"
description: "介绍 Shadowsocks（SS）协议的基本特点，以及在机场代理场景中怎么理解和使用它。"
category: "协议"
difficulty: "intermediate"
author: "火箭机场编辑团队"
publishedAt: 2026-08-10
updatedAt: 2026-08-10
relatedTopics: ["airport-proxy-protocols-explained", "what-is-vless-protocol", "what-is-trojan-protocol", "what-is-clash-getting-started"]
---

Shadowsocks（通常简称 SS）是机场代理领域里出现时间较早、使用范围较广的协议之一。这篇文章介绍它的基本特点。协议的整体分类可以先看[机场代理协议入门](/knowledge/airport-proxy-protocols-explained/)。

## Shadowsocks 是什么

Shadowsocks 的设计相对简单：客户端和服务端之间用同一套密钥对数据进行加密传输。因为设计简单，配置门槛低，几乎所有主流平台都有对应的客户端实现，生态非常成熟，这也是为什么很多年来它一直是机场代理行业里最常见的协议之一。

相比后来出现的 VMess、VLESS、Trojan 等协议，Shadowsocks 的流量特征相对更容易被识别出"这是代理流量"，这也是它在设计上和后续协议的主要区别之一——后来的协议在这方面做了更多针对性的改进。

## Shadowsocks 现在还在用吗

会用。虽然出现时间较早，但因为配置简单、客户端支持广泛、资源占用低，Shadowsocks 目前仍然是不少机场代理服务商提供的协议选项之一，尤其在对流量伪装要求不高的场景下，仍然是常见的选择。

需要说明的是，本站在整理服务商资料时也遇到过协议描述不一致的情况——比如灵猫网络的第三方资料里，服务商宣传文案提到"新 SS 协议"，但同一份资料的测速截图里协议栏实际显示为 Vless，两者存在矛盾（具体可以看[灵猫网络的资料整理](/airports/lingmao-network/)）。这提醒我们：服务商或第三方资料里提到的协议名称，不一定和你实际拿到的订阅、客户端里显示的协议完全一致，建议以自己客户端实际识别的结果为准。

## 使用 Shadowsocks 需要注意什么

- **加密方式的选择**：Shadowsocks 支持多种加密算法，服务商通常会指定使用哪一种，跟随服务商的配置即可，不需要自己额外选择
- **客户端兼容性广**：这是 Shadowsocks 的优势之一，如果你的客户端比较老旧或者小众，Shadowsocks 通常是兼容性最好的选择
- **不代表速度或稳定性**：协议本身不直接决定速度快慢，具体表现更多取决于节点和线路，可以参考[节点和线路到底是什么](/knowledge/what-are-nodes-and-routes/)

## 常见问题

**Shadowsocks 和 SS 是一回事吗？**
是的，SS 是 Shadowsocks 的常见简称，两者指的是同一个协议。

**Shadowsocks 已经过时了吗？**
不能简单地说"过时"。它在配置简单性、客户端兼容性方面仍然有优势，目前仍被不少服务商使用，具体是否适合你，更多取决于你的客户端支持情况和实际使用场景。

**为什么有的服务商说用了新版 SS 协议？**
不同服务商可能会在 Shadowsocks 基础上做一些自定义的加密方式调整，具体名称可能各有不同，建议以客户端实际识别的结果和服务商提供的配置说明为准，不要仅凭宣传文案里的名称判断。

**SS 协议安全吗？**
Shadowsocks 本身有加密机制，日常使用场景下是可用的，但相比后续设计的协议（比如搭配 TLS 使用的 Trojan、VLESS），在流量特征识别方面相对更容易被识别为代理流量。

## 相关协议

如果你还想了解其他协议，可以看看[VLESS 是什么](/knowledge/what-is-vless-protocol/)、[Trojan 协议是什么](/knowledge/what-is-trojan-protocol/)，以及基于 UDP 设计的[Hysteria2 是什么协议](/knowledge/what-is-hysteria2-protocol/)；第一次配置客户端的话，建议参考[Clash 是什么？新手如何开始使用](/tutorials/what-is-clash-getting-started/)或者完整的[机场新手教程](/tutorials/airport-beginner-full-guide/)。
