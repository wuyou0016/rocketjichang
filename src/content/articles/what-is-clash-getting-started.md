---
type: "tutorial"
title: "Clash 是什么？新手如何开始使用"
description: "介绍 Clash 这类客户端软件的基本作用，以及新手第一次使用时的大致流程。"
category: "机场客户端"
difficulty: "beginner"
author: "火箭机场编辑团队"
publishedAt: 2026-08-09
updatedAt: 2026-08-27
relatedTopics: ["what-is-subscription-link", "airport-proxy-protocols-explained", "sing-box-mihomo-getting-started"]
---

Clash 是机场代理用户中比较常见的一类客户端软件，如果你是第一次接触，这篇文章会介绍它的基本作用和大致的使用流程。

## Clash 是什么

Clash 是一款支持规则配置的代理客户端软件，可以在电脑、手机等多种平台上使用。它的特点是支持按规则把不同的网络请求分流到不同的节点，也支持常见的多种通信协议。

因为生态比较成熟，衍生出了不少基于 Clash 内核开发的图形化客户端，操作界面比早期的纯配置文件方式更直观，也是很多新手接触机场代理时的常见选择。

## 使用前需要准备什么

在开始配置客户端之前，你需要先有一个机场代理服务商提供的**订阅链接**。订阅链接是什么、怎么获取，我们在[机场订阅链接是什么？如何导入客户端](/tutorials/what-is-subscription-link/)里做了具体说明，这里假设你已经拿到了订阅链接。

## 新手大致的使用流程

不同 Clash 相关客户端在具体操作细节上会有差异，但整体流程大致相似：

1. **获取客户端软件**：从对应平台的官方渠道下载安装
2. **导入订阅**：在客户端的订阅管理里，粘贴服务商提供的订阅链接并更新，客户端会自动读取节点列表
3. **选择节点**：根据自己的需求（比如地区、延迟）在节点列表中选择一个
4. **开启连接**：确认节点选择后，开启代理连接
5. **验证是否生效**：连接后可以通过客户端自带的测速或状态显示，确认连接是否正常

具体每一步的界面和操作方式，建议以你所使用的客户端官方文档为准，因为不同衍生版本的界面设计不完全一样。

## 规则配置是进阶功能

Clash 比较有特点的"[分流规则](/glossary/rule-set/)"功能（比如指定某些网站走代理、某些网站直连），属于进阶使用技巧，新手第一次使用时不需要马上研究，先确保基础连接正常使用即可，后续有需要再逐步了解。

## 只用 iOS 设备？也可以考虑 Shadowrocket

Clash 系列覆盖电脑、手机等多个平台；如果你只用 iOS 设备，且不介意付费购买 App，也可以考虑另一款常见客户端 Shadowrocket，具体可以看[Shadowrocket 是什么？机场用户怎么使用](/tutorials/what-is-shadowrocket/)。

## Clash 生态也在演进

如果你之后看到"Clash Meta""Mihomo""sing-box"这类名字，不用感到困惑——这些是 Clash 内核生态延续和演进出的相关项目，具体是什么关系，可以看[sing-box 和 Mihomo 是什么？新手怎么开始用](/tutorials/sing-box-mihomo-getting-started/)。

## 遇到连接问题怎么办

如果配置完成后无法正常连接，可以参考[机场连接不上怎么办？从订阅、节点到客户端逐步排查](/troubleshooting/connection-troubleshooting-step-by-step/)，按订阅、节点、客户端三个层面逐一排查问题出在哪里；如果问题具体出在订阅导入或更新这一步，可以直接看[订阅链接导入失败、更新不了怎么办](/troubleshooting/subscription-link-import-failed/)。

## 协议支持也需要留意

Clash 及其衍生客户端对不同协议的支持程度可能不完全一样，如果服务商提供的节点使用了某种特定协议，建议先确认客户端是否支持。协议相关的基础概念可以参考[机场代理协议入门](/knowledge/airport-proxy-protocols-explained/)。
