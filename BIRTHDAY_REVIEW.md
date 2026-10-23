# 菲洛一岁成长纪事

## 修改

在原有九个成长节点后增加 2026 年 10 月 15 日的一岁纪事。中文标题为“一岁啦，跑圈事业继续！”，英文标题为“One Year Old, Still Running in Circles!”。

纪事使用文字卡片，没有新增或挪用照片。追逐、绕圈和从小认识的公柴犬混血朋友作为成长回顾，不描述为生日当天发生的活动。

沿用 translations 与 data-i18n。切换语言时同步更新 html 的 lang 属性。保留原有照片、九个节点、CSS 和基金弹窗逻辑。

## 本地预览

安装 Python 3 后，在仓库目录运行：

```bash
python -m http.server 8000
```

Windows 也可使用 `py -m http.server 8000`。浏览器打开：

http://localhost:8000/#first-birthday

页面依然依赖原有的 Tailwind CDN、Google Fonts 和 Lucide，预览时需要联网。

## 验证

已通过 JavaScript 语法检查、全部翻译键完整性及语言来回切换检查。原有九个节点、原有翻译内容与全部图片路径保持不变。

新增节点包含手机端日期、可自然换行的段落、可收缩内容区；桌面端保留固定日期栏。响应式类和结构已检查。

当前环境缺少本地浏览器，浏览器安装下载失败；远程浏览器无法访问本地预览文件。因此尚未完成真实手机视口的视觉验收，不能把代码检查视为实机通过。

人工验收步骤：在浏览器开发者工具中切换到设备模拟，依次检查 320、375、390、768 和 1280 像素宽度；每个宽度切换中文和英文，确认无横向滚动、标题和正文完整换行、日期只显示一次。来回切换后检查原有节点及基金弹窗仍正常。

## 两个仓库的同步

读取时，border_collie_philo 与 border_collie_philo_ 的 index.html 和 script.js 的 Git blob SHA 完全相同：

* index.html: bfca820f93ecfd8b33f8269c8770afffb482b5ef
* script.js: ac1573125dd2771ceb616d2bdde1cdc4d147b790

本次修改只提交到 border_collie_philo 的独立审查分支，没有改动任一仓库的 main。

如果两个仓库都继续对外提供主页，审查通过后应将本次 index.html 和 script.js 同步到 border_collie_philo_，保持两份网站内容一致；style.css 和照片不需要同步修改。同步前重新检查目标分支，避免覆盖之后出现的新修改。若只维护一个入口，可选择将另一个主页重定向到主站，避免日后重复维护。
