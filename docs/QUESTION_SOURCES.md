# 408 外部题源导航与检索方式

## 定位

用户当前主任务是**历史408真题错题重刷**。本页仅登记额外补充题库，供需要「同一考点的类似题」时检索；并非每日随机出题清单。

## RELAX1000（补充题源）

- GitHub：<https://github.com/jlshdsdk/relax-1000>
- 在线总目录：<https://jlshdsdk.github.io/relax-1000/>
- 结构化题库数据：<https://github.com/jlshdsdk/relax-1000/blob/main/data/site.json>
- 上游 README：<https://github.com/jlshdsdk/relax-1000/blob/main/README.md>
- 检查日期：2026-11-11。上游 README 当时标示 **2026年10月勘误版（27版）、1576题、四科24章**，分别为 DS 411、CO 373、OS 417、CN 375。将来数量或题目可能变化，应现场复核。

### 按科目/章节打开

| 科目 | 站点章节入口 |
| --- | --- |
| DS 数据结构 | [绪论](https://jlshdsdk.github.io/relax-1000/p1c1.html) · [线性表](https://jlshdsdk.github.io/relax-1000/p1c2.html) · [栈、队列、数组、字符串](https://jlshdsdk.github.io/relax-1000/p1c3.html) · [树](https://jlshdsdk.github.io/relax-1000/p1c4.html) · [图](https://jlshdsdk.github.io/relax-1000/p1c5.html) · [查找](https://jlshdsdk.github.io/relax-1000/p1c6.html) · [排序](https://jlshdsdk.github.io/relax-1000/p1c7.html) |
| CO 计算机组成原理 | [计算机系统概述](https://jlshdsdk.github.io/relax-1000/p2c1.html) · [数据的表示和运算](https://jlshdsdk.github.io/relax-1000/p2c2.html) · [存储器层次结构（Cache 等）](https://jlshdsdk.github.io/relax-1000/p2c3.html) · [指令系统](https://jlshdsdk.github.io/relax-1000/p2c4.html) · [中央处理器](https://jlshdsdk.github.io/relax-1000/p2c5.html) · [总线与输入/输出](https://jlshdsdk.github.io/relax-1000/p2c6.html) |
| OS 操作系统 | [计算机系统概述](https://jlshdsdk.github.io/relax-1000/p3c1.html) · [进程管理（同步、死锁等）](https://jlshdsdk.github.io/relax-1000/p3c2.html) · [内存管理](https://jlshdsdk.github.io/relax-1000/p3c3.html) · [文件管理](https://jlshdsdk.github.io/relax-1000/p3c4.html) · [I/O 管理](https://jlshdsdk.github.io/relax-1000/p3c5.html) |
| CN 计算机网络 | [绪论](https://jlshdsdk.github.io/relax-1000/p4c1.html) · [物理层](https://jlshdsdk.github.io/relax-1000/p4c2.html) · [数据链路层](https://jlshdsdk.github.io/relax-1000/p4c3.html) · [网络层](https://jlshdsdk.github.io/relax-1000/p4c4.html) · [传输层](https://jlshdsdk.github.io/relax-1000/p4c5.html) · [应用层](https://jlshdsdk.github.io/relax-1000/p4c6.html) |

### AI 如何检索同类题

1. 首先读取本仓库 `docs/index.html` 的历史失分题号与 `docs/progress.json` 的当前复习状态，并对照最近实际批改记录。优先原408真题错题，不要直接跳去 RELAX1000。
2. 当用户要求「同类题」或需要额外验证时，提取**具体考点及错误机制**，例如「Cache直接映射下替换/缺失率」而不是只按“计算机组成原理”随机找题。
3. 用表中的章节入口打开上游 HTML，或查询上游 `data/site.json`，逐题对照关键词、条件、题型和解法，确认是一道适当的同类题，**不能只根据章节猜测题号**。
4. 上游题目页每道题有如 `data-qid="p1c1q1"` 的题目标识与 `id="q1"` 的页面锚点。单章可能分页，如 `p1c5-2.html`，实际链接须以题目所在分页为准。示例：[DS 绪论第1题](https://jlshdsdk.github.io/relax-1000/p1c1.html#q1)。
5. 出题注明来源（RELAX1000 / DS、CO、OS或CN / 章节 / 题号）和具体题目网页链接；先只给核实后的完整题干/选项，不先给答案。用户作答后再按一题一解析批改。
6. 如果上游访问失败、图片/数学符号不能正确提取、或答案存疑，明确说明，避免编造内容。对题干和答案不要仅靠模型记忆。
7. 已经确认掌握的同类题不反复出；RELAX1000 绝不标为历年408统考真题。

其他统一规范参见仓库根目录 [AGENTS.md](../AGENTS.md)。

> 这里只保存**题库引用和检索规则**，不复制第三方题目全文、不擅自更改复习进度。
