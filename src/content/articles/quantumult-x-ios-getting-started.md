---
type: "tutorial"
title: "Quantumult X 是什么？iOS 新手入门与订阅导入"
description: "介绍 iOS 客户端 Quantumult X 的基本作用、适合什么用户，以及导入机场订阅、选择节点的大致流程。"
category: "机场客户端"
difficulty: "intermediate"
author: "火箭机场编辑团队"
publishedAt: 2026-08-27
updatedAt: 2026-08-27
relatedTopics: ["what-is-shadowrocket", "what-is-subscription-link", "connection-troubleshooting-step-by-step"]
---

在 iOS 平台上，除了[Shadowrocket](/tutorials/what-is-shadowrocket/)，Quantumult X 是另一款经常被机场服务商提到的客户端。这篇文章介绍它的基本作用和入门使用流程，不重复 Shadowrocket 教程里已经讲过的通用概念。

## Quantumult X 是什么

Quantumult X 同样是一款仅支持 iOS 的付费代理客户端，需要在 App Store 购买（部分地区可能需要切换到其他地区的 App Store 账号才能下载）。它的特点是支持脚本重写、模块化配置等进阶功能，配置能力和灵活度相对更高，但也意味着新手第一次接触时，界面和概念会比 Shadowrocket 稍显复杂。

## 适合什么用户

- **适合**：已经有一定机场代理使用经验、希望使用脚本重写或更精细分流规则的用户；
- **不一定适合**：完全没接触过机场代理的新手——如果你是第一次配置客户端，建议先看[Shadowrocket 是什么？机场用户怎么使用](/tutorials/what-is-shadowrocket/)或[Clash 是什么？新手如何开始使用](/tutorials/what-is-clash-getting-started/)熟悉基本概念，再考虑是否需要 Quantumult X 的进阶能力。

## 怎么导入机场订阅

如果你还不清楚订阅链接是什么，建议先看[机场订阅链接是什么？如何导入客户端](/tutorials/what-is-subscription-link/)。拿到订阅链接后，大致流程如下（具体界面以你当前安装的版本为准）：

1. 打开 Quantumult X，进入"配置"相关的标签页；
2. 找到远程配置或订阅管理入口，添加一条新的配置；
3. 粘贴服务商提供的订阅链接，保存后客户端会拉取节点信息；
4. 在节点列表中选择需要使用的节点。

## 配置文件和普通订阅的区别

Quantumult X 支持两种常见的接入方式：一种是直接导入服务商提供的标准订阅链接（和其他客户端类似）；另一种是使用服务商专门为 Quantumult X 生成的配置文件（通常包含额外的规则、重写脚本等内容）。如果服务商同时提供了这两种方式，建议先确认自己实际需要哪一种——只是想正常连接使用，标准订阅链接通常已经足够；如果需要用到脚本重写等进阶功能，才需要使用专用配置文件。

## 节点选择和连接

订阅或配置导入完成后，节点会按分组显示。选择节点、开启连接的逻辑和其他客户端类似：优先选择延迟较低、状态显示正常的节点，开启后系统会弹出 VPN 配置授权提示，允许后即可开始使用。

## 常见连接问题

如果配置完成后无法正常访问网络，可以按以下方向排查：

- 确认订阅或配置文件是否更新成功、节点列表是否正常；
- 确认使用的是标准订阅还是专用配置文件，二者的更新和生效方式可能不同；
- 检查节点对应的协议是否被当前版本正确支持；
- 更系统的排查思路，参考[机场连接不上怎么办？从订阅、节点到客户端逐步排查](/troubleshooting/connection-troubleshooting-step-by-step/)。

## 常见问题

**Quantumult X 和 Shadowrocket 应该选哪个？**
如果你是新手，Shadowrocket 界面相对简单，上手更快；如果你已经有一定经验，希望使用脚本重写等进阶功能，可以考虑 Quantumult X。两者都只支持 iOS。

**Quantumult X 需要付费吗？**
是的，它是 App Store 上的付费应用。

**为什么服务商给了两种不同的导入方式？**
部分服务商会同时提供标准订阅链接和 Quantumult X 专用配置文件，分别对应基础使用和进阶功能，具体以服务商说明为准。

**订阅更新后节点没有变化怎么办？**
可以参考[订阅链接导入失败、更新不了怎么办](/troubleshooting/subscription-link-import-failed/)排查，或尝试删除后重新添加订阅。

## 相关内容

如果你还没搞清楚订阅链接是什么，建议先看[机场订阅链接是什么？如何导入客户端](/tutorials/what-is-subscription-link/)；如果你是第一次在 iOS 上配置客户端，建议先看相对更简单的[Shadowrocket 是什么？机场用户怎么使用](/tutorials/what-is-shadowrocket/)。
