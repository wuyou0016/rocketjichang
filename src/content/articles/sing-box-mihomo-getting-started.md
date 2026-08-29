---
type: "tutorial"
title: "sing-box 和 Mihomo 是什么？新手怎么开始用"
description: "解释 sing-box 内核和 Mihomo（原 Clash Meta）客户端的关系、和传统 Clash 的区别，以及新手第一次接触时的大致使用思路。"
category: "机场客户端"
difficulty: "intermediate"
author: "火箭机场编辑团队"
publishedAt: 2026-08-27
updatedAt: 2026-08-27
relatedTopics: ["what-is-clash-getting-started", "what-is-subscription-link", "what-is-hysteria2-protocol", "v2rayn-windows-getting-started"]
---

如果你在搜索 Clash 相关内容时看到过"Clash Meta 已停止更新，建议使用 Mihomo"或者"sing-box"这类说法，可能会有点困惑：这些和之前了解的 Clash 是什么关系？这篇文章简单梳理一下。

## 先回顾一下背景

我们在[Clash 是什么？新手如何开始使用](/tutorials/what-is-clash-getting-started/)里提到过，Clash 生态衍生出了不少基于其内核开发的客户端。这个生态并不是一成一不变的：原始 Clash 项目在开发上出现过停滞，社区里陆续出现了功能更完善的分支版本，其中 Clash Meta 是曾经比较活跃的一个分支，后来 Clash Meta 项目更名为 Mihomo 并继续维护。也就是说，**Mihomo 是 Clash Meta 分支延续下来的项目新名字**，核心定位仍然是一款支持规则分流的代理内核/客户端。

## sing-box 又是什么

sing-box 是另一个独立发展起来的代理平台项目，设计目标是提供一个通用、模块化的代理内核，同时支持多种协议（包括 Shadowsocks、Trojan、VLESS、Hysteria2 等）和多种运行平台。它和 Clash/Mihomo 不是同一套代码体系，但功能定位上有相似之处：都可以作为节点连接、规则分流的底层实现，很多图形化客户端（包括一些 Mihomo 衍生的图形界面）会选择基于 sing-box 内核来实现底层功能。

简单理解：sing-box 更偏"底层内核"，实际使用中你接触到的通常是基于 sing-box 或 Mihomo 内核开发的图形化客户端，而不是直接操作内核本身。

## 新手需要关心这些区别吗

对刚接触机场代理的新手来说，不需要纠结"底层用的是哪个内核"这类细节。你需要知道的是：

- 如果你正在使用的 Clash 相关客户端提示"内核已过时""建议更新到 Mihomo 内核"，通常意味着该客户端切换或升级了底层实现，正常按提示操作即可；
- 不同内核对新协议、新特性的支持速度可能不同——如果服务商使用了较新的协议或特性，建议确认你使用的客户端及其内核版本是否已经支持；
- 日常使用层面（导入订阅、选择节点、开启连接），无论底层是原始 Clash 内核、Mihomo 还是 sing-box，操作逻辑都大同小异。

## 大致的使用流程

如果你选择的是基于 sing-box 或 Mihomo 内核的图形化客户端，入门流程和[Clash 是什么？新手如何开始使用](/tutorials/what-is-clash-getting-started/)里介绍的基本一致：

1. 从对应平台的官方渠道下载客户端软件；
2. 在订阅管理里粘贴机场服务商提供的订阅链接并更新；
3. 在节点列表中选择需要使用的节点；
4. 开启代理连接，通过客户端自带的状态显示确认是否生效。

具体界面元素以你实际安装的客户端版本为准，不同图形化客户端在这套内核之上做的界面设计并不完全一样。

## 为什么会有这么多相似的名字

机场代理这类客户端软件大多是开源项目，社区活跃度高、分支和重命名的情况并不少见（原始项目停更、维护者变更、项目重新定位品牌等都可能导致改名）。遇到新名字时，比较稳妥的做法是先确认它和你已经了解的项目是"同一脉络的延续"还是"完全独立的新项目"，避免混淆功能预期。

## 常见问题

**Mihomo 和 Clash 是同一个东西吗？**
不完全是。Mihomo 是 Clash Meta 分支改名后的延续项目，功能定位和原始 Clash 类似，但代码维护主体和版本节奏是独立的。

**sing-box 和 Mihomo 哪个更好？**
两者定位不完全相同，sing-box 更偏通用内核，Mihomo 延续自 Clash Meta 生态。对普通用户来说，更实际的判断标准是你选用的图形化客户端是否稳定、协议支持是否满足需求，而不是纠结底层项目名称。

**我现在用的 Clash 客户端还能用吗？**
只要客户端本身仍在维护、协议支持没有问题，继续使用没有问题。如果长期没有更新或者遇到新协议无法识别的情况，可以考虑更换为基于 Mihomo 或 sing-box 内核的替代客户端。

## 相关内容

如果你是第一次接触 Clash 系列客户端，建议先看[Clash 是什么？新手如何开始使用](/tutorials/what-is-clash-getting-started/)；如果你使用 Windows 电脑，也可以了解另一条技术路线[V2rayN 是什么？Windows 电脑怎么导入机场订阅](/tutorials/v2rayn-windows-getting-started/)。协议相关的基础概念可以参考[Hysteria2 协议是什么](/knowledge/what-is-hysteria2-protocol/)。
