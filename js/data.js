export default {
    index: {
        title: "你好，我是",
        me: [
            "张子杰",
            "ZiJie Zhang",
            "西交少年班学生",
            "Github: GrassyUnknown"
        ],
        bg: "./images/bg.jpg",
        subTitle: "深山踏红叶，耳畔闻鹿鸣",
        contact: [
            {
                name: "Email",
                icon: "fa-envelope",
                link: "mailto:zhangzijie.xjtu@outlook.com"
            },
            {
                name: "Github",
                icon: "fa-github",
                link: "https://github.com/GrassyUnknown"
            },
            {
                name: "QQ",
                icon: "fa-qq",
                link: "tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=2964918174"
            }
        ],
        loadMore: {
            text: "了解更多",
            class: "resume2"
        }
    },
    about: {
        title: "关于我",
        laozi: {
            img: "./images/me.jpg",
            content: `<span></span>我是<b>张子杰</b>，18岁，<b>西安交通大学软件工程专业</b>2021级在读学生<br />
            <span></span>曾获<b>蓝桥杯国赛二等奖</b>，<b>ICPC陕西省赛银奖</b>，<b>全国大学生软件测试大赛二等奖</b>等奖项<br />
            <span></span>曾获<b>校级二等奖学金</b>，<b>优秀学生</b>，<b>校网络管理协会优秀社员</b>，<b>校“七星杯”立直麻将竞赛第四名</b>等荣誉。<br />
            <span></span>前三学年平均学分成绩<b>86.85</b>，排名约<b>30/157</b>，四级成绩<b>637</b>，六级成绩<b>474</b>，CCF-CSP认证成绩<b>365</b>（全国前1.42%）<br />`
        },
        ability: [{
                icon: "fa-html5",
                title: "Java",
                subTitle: "Java Web前后端、数据库、面向对象应用程序",
                color: "#ff4757",
                bfb: "80%"
            },
            {
                icon: "fa-code",
                title: "C/C++",
                subTitle: "操作系统底层、单片机开发",
                color: "#ffa502",
                bfb: "75%"
            },
            {
                icon: "fa-linux",
                title: "软件开发",
                subTitle: "软件测试、软件系统分析、软件项目管理",
                color: "#1e90ff",
                bfb: "85%"
            },
            {
                icon: "fa-photo",
                title: "人工智能",
                subTitle: "机器学习、深度学习",
                color: "#2ed573",
                bfb: "50%"
            }
        ],
        loadMore: {
            text: "继续浏览",
            class: "resume3"
        }
    },
    project: {
        title: "项目经历",
        list: [{
                name: "华为实习",
                text: "鸿蒙软总线",
                nb: [
                    "操作系统", "C++", "Linux", "测试", "开发流程"
                ],
                url: "https://github.com/GrassyUnknown/Health-Life-HarmonyOS-Next",
                img: "./images/project1.png",
                content: `<h2>项目类型</h2>
                <p>实习</p>
                <h2>实习周期</h2>
                <p>2024年6月19日 至今</p>
                <h2>开发工具</h2>
                <p>DevEco、Git、VSCode Huawei、Mate 60 Pro及华为内部开发工具</p>
                <h2>项目介绍</h2>
                <p>在HarmonyOS菁英班中，我对鸿蒙架构和特性形成了深刻理解，讲师精彩的讲解和同学们提出的问题都让我受益匪浅。</p>
                <p>理论学习之后，我们实现了运动健康鸿蒙应用，让我感受到了技术转化为实际产品的乐趣。</p>
                <p>在部门项目实践阶段，我参与了鸿蒙软总线发现模块的开发与维护。</p>
                <p>这一过程中，我了解了多种互联技术和规范，通过自主编写代码实现了基于BLE的设备发现并进行测试，见证了设备间无缝互联的神奇。</p>
                <p>同时，我还参与到开源鸿蒙和鸿蒙Next操作系统的共建之中，修改代码、提交pr，深刻感受到了代码规范的重要性。</p>`
            },
            {
                name: "nn",
                text: "",
                nb: [
                    "Vue", "ElementUI", "MinitUI", "Redis", "SSM", "JAVA", "Mysql"
                ],
                url: "",
                img: "./images/bg.jpg",
                content: `<h2>项目类型</h2>
                <p>练手项目</p>
                <h2>开发周期</h2>
                <p>2020年11月2日 – 2020年12月1日，3人/29天</p>
                <h2>开发工具</h2>
                <p>IDEA、Visual Code、MySQL、Redis、Git、Postman</p>
                <h2>项目背景</h2>
                <p>小黑屋商城是一个综合性的B2C平台，类似京东商城、天猫商城。会员可以在商城浏览商品、下订单，以及参加各种活动。管理员、运营可以在平台后台管理系统中管理商品、订单、会员等。</p>
                <h2>模块介绍</h2>
                <p>1、	基本：登陆注册、找回密码、验证码；</p>
                <p>2、	首页：轮播图热点展示、商品分类展示、商品展示；</p>
                <p>3、	商品详情：图片轮流展示、图片放大镜、商品信息展示、打折与原价展示、添加购物车与购买、评论分类展示、二维码分享、热销展示；</p>
                <p>4、	购物车：购物车商品展示、数量修改、商品类型修改、批量管理与购买、删除购物车；</p>
                <p>5、	支付：充值余额、支付宝支付、支付成功/失败展示；</p>
                <p>6、	用户：个人信息管理、地址选择、订单管理、购物车管理、余额管理；</p>
                <h2>项目技术</h2>
                <p>1.	前端分为 PC 与 Mobile 两个客户端，基于 Vue、ElementUI、Mint UI 编写；</p>
                <p>2.	后端采用 Java、SSM 编写 RESTFul API 风格接口；</p>
                <p>3.	前端资源全部采用 lazy-load 懒加载，并且存储在阿里云OOS进行调用；</p>
                <p>4.	图片验证码由后端生成返回Base64并在前端展示，手机验证码则为阿里云短信服务，验证缓存统一放在Redis进行暂存；</p>
                <p>5.	二维码生成采用 QRCode 根据链接进行生成并压缩；</p>
                <p>6.	充值系统基于支付宝沙箱程序模拟真实的支付宝支付验证付款等；</p>
                <p>7.	登录验证采用 JWT 授权，请求需要登录的接口需要提交 Token 才能通过，否则登陆过期；</p>
                <p>8.	Mobile 端采用瀑布流布局来展示商品；</p>
                <h2>项目预览</h2>
                <p>暂无</p>
                <h2>项目职责</h2>
                <p>1、前端功能开发、页面设计；</p>
                <p>2、支付宝支付对接；</p>
                <p>3、Debug测试并修复；</p>`,
            },
            {
                name: "yy",
                text: "yyy",
                nb: [
                    "Winform", "SQLServer", "C#"
                ],
                url: "",
                img: "./images/xcl1.png",
                content: `<h2>项目类型</h2>
                <p>练手项目</p>
                <h2>开发周期</h2>
                <p>2021年4月2日 – 2021年5月5日，2人/33天</p>
                <h2>开发工具</h2>
                <p>Visual Studio、SQLServer、Git</p>
                <h2>项目背景</h2>
                <p>本项目是为了满足巨大的餐饮市场中人们对快捷点餐的需求。我们的产品具有的高效、快捷、便利的特点将会为我们带来巨大的市场，我们的产品开发初期主要服务于餐饮行业，后续开发可涉及更广泛的娱乐、生活领域，是一款具备广阔市场前景的应用！</p>
                <h2>模块介绍</h2>
                <p>1、	基本：登录注册、找回密码、密保、验证码；</p>
                <p>2、	客户端：美食分类、购物车、支付充值、订单操作、地址管理、个人信息修改、密码修改、数据可视化；</p>
                <p>3、	服务端：订单管理、美食与分类管理、上下架操作、美食图片上传、用户管理、数据可视化；</p>
                <h2>项目技术</h2>
                <p>1、	使用 Winform 绘制软件界面，C# 便携后台代码；</p>
                <p>2、	使用 SQLServer 作为数据存储，便携 DBHelper 类与数据库进行交互；</p>
                <p>3、	图片验证码使用 Winform GDI+ 绘图生成随机验证码并显示；</p>
                <p>4、	所有密码采用 MD5 加密方式进行存储；</p>
                <p>5、	对所有的前台数据进行XSS注入或为空验证，防止恶意代码或空值造成程序报错；</p>
                <p>6、	许多位置进行了 Try Catch 异常捕获，如发生断网等情况软件会提醒客户而不是报错；</p>
                <h2>项目预览</h2>
                <ul>
                    <li><img src="./images/xcl1.png"></li>
                    <li><img src="./images/xcl2.png"></li>
                    <li><img src="./images/xcl3.png"></li>
                </ul>
                <h2>项目职责</h2>
                <p>1、参与原型图设计与 UI 设计，辅助市场调研；</p>
                <p>2、负责数据库设计，模块设计；</p>
                <p>3、客户端与服务端的编程开发；</p>
                <p>4、修复测试人员发现的BUG；</p>`,
            },
            {
                name: "bbb",
                text: "bbbb",
                nb: [
                    "Gitee Issues", "Vue", "Vue", "Linux", "SEO", "CDN"
                ],
                url: "",
                img: "./images/heng1.png",
                content: `<h2>项目类型</h2>
                <p>练手项目</p>
                <h2>开发周期</h2>
                <p>1人/2天</p>
                <h2>开发工具</h2>
                <p>Visual Code、Git、Postman、Gitee API</p>
                <h2>项目背景</h2>
                <p>单纯的记仇小本本，可用于记录日常生活</p>
                <h2>模块介绍</h2>
                <p>1、	查看记仇；</p>
                <p>2、	发布记仇；</p>
                <h2>项目技术</h2>
                <p>1、	前端采用Vue + ElementUI制作；</p>
                <p>2、	数据存储利用了Gitee Issues进行存储；</p>
                <p>3、	CSS 3D样式模拟书本翻页；</p>
                <p>4、	CSS 绘制书本样式；</p>
                <p>5、	懒加载记仇数据，类似于翻页；</p>
                <p>6、	富文本支持，表情照片视频支持；</p>
                <p>7、	全端响应式自适应；</p>
                <p>8、	采用CDN加速网站；</p>
                <h2>项目预览</h2>
                <ul>
                    <li><img src="./images/heng1.png"></li>
                    <li><img src="./images/heng2.png"></li>
                    <li><img src="./images/heng3.png"></li>
                </ul>`,
            },
            {
                name: "erer",
                text: "rrr",
                nb: [
                    "Vue", "Vue", "Linux", "SEO", "CDN"
                ],
                url: "",
                img: "./images/so.png",
                content: `<h2>项目类型</h2>
                <p>练手项目</p>
                <h2>开发周期</h2>
                <p>1人/2天</p>
                <h2>开发工具</h2>
                <p>Visual Code、Git、Postman、Gitee API</p>
                <h2>项目背景</h2>
                <p>团队需要，新年新官网</p>
                <h2>模块介绍</h2>
                <p>1、	搜索功能；</p>
                <p>2、	搜索引擎切换与添加；</p>
                <p>3、	各类实用网站导航与分类；</p>
                <p>4、	配置本地存储；</p>
                <p>5、	背景图获取 bing 每日壁纸或自定义壁纸；</p>
                <p>6、	搜索结果数量自定义；</p>
                <h2>项目技术</h2>
                <p>1、	前端采用 Vue + ElementUI 制作，后端采用 Node + Mysql 制作；</p>
                <p>2、	百度搜索结果实时回调；</p>
                <p>3、	bing 每日壁纸回调；</p>
                <p>4、	本地配置存储；</p>
                <p>5、	实用网站分类预览；</p>
                <p>6、	全端响应式自适应；</p>
                <p>7、	采用CDN加速网站；</p>
                <h2>项目预览</h2>
                <p>暂无</p>`,
            },
            {
                name: "qw",
                text: "wq",
                nb: [
                    "Vue", "Linux", "SEO", "CDN"
                ],
                url: "",
                img: "./images/geek1.png",
                content: `<h2>项目类型</h2>
                <p>官网</p>
                <h2>开发周期</h2>
                <p>1人/8天</p>
                <h2>开发工具</h2>
                <p>Visual Code、Git、Postman、Gitee API</p>
                <h2>项目背景</h2>
                <p>团队需要，新年新官网</p>
                <h2>模块介绍</h2>
                <p>1、	首页轮播图，介绍；</p>
                <p>2、	关于我们；</p>
                <p>3、	公益活动；</p>
                <p>4、	捐赠人员；</p>
                <p>5、	团队成员；</p>
                <p>6、	加入我们；</p>
                <h2>项目技术</h2>
                <p>1、	前端采用Vue制作；</p>
                <p>2、	CSS 中国风科技感设计；</p>
                <p>3、	CSS 按钮赛博朋克电磁风格；</p>
                <p>4、	CSS 推拉门图片风格；</p>
                <p>5、	全端响应式自适应；</p>
                <p>6、	采用CDN加速网站；</p>
                <h2>项目预览</h2>
                <ul>
                    <li><img src="./images/geek1.png"></li>
                    <li><img src="./images/geek2.png"></li>
                    <li><img src="./images/geek3.png"></li>
                    <li><img src="./images/geek4.png"></li>
                </ul>`,
            },
            {
                name: "poi",
                text: "oiop",
                nb: [
                    "Vue", "Linux", "SEO", "CDN"
                ],
                url: "",
                img: "./images/xxgc1.png",
                content: `<h2>项目类型</h2>
                <p>官网</p>
                <h2>开发周期</h2>
                <p>1人/4天</p>
                <h2>开发工具</h2>
                <p>Visual Code、Git、Postman</p>
                <h2>项目背景</h2>
                <p>给好朋友会长做一个计协官网</p>
                <h2>模块介绍</h2>
                <p>1、	首页；</p>
                <p>2、	关于我们；</p>
                <p>3、	历程发展；</p>
                <p>4、	计协干部；</p>
                <p>5、	日常一览；</p>
                <p>6、	加入我们；</p>
                <h2>项目技术</h2>
                <p>1、	前端采用 Vue + ElementUI 制作，后端采用 Node + Mysql 制作；</p>
                <p>2、	轮播图，轮播图的放大效果动效；</p>
                <p>3、	关于我们点击文章功能；</p>
                <h2>项目预览</h2>
                <ul>
                    <li><img src="./images/xxgc1.png"></li>
                    <li><img src="./images/xxgc2.png"></li>
                    <li><img src="./images/xxgc3.png"></li>
                </ul>`,
            },
            {
                name: "xcv",
                text: "xxx",
                nb: [
                    "HTML", "CSS", "JS", "Vue", "Vue", "Linux", "SEO", "CDN"
                ],
                url: "",
                img: "./images/nuts1.png",
                content: `<h2>项目类型</h2>
                <p>练手单页</p>
                <h2>开发周期</h2>
                <p>1人/？天</p>
                <h2>开发工具</h2>
                <p>Visual Code、Git、Postman</p>
                <h2>项目背景</h2>
                <p>个人练手设计作品</p>
                <h2>项目技术</h2>
                <p>1、	全端响应式自适应；</p>
                <p>2、	简约风格，与众不同；</p>
                <h2>项目预览</h2>
                <ul>
                    <li><img src="./images/nuts1.png"></li>
                    <li><img src="./images/nuts2.png"></li>
                </ul>`,
            },
            {
                name: "sadsda",
                text: "",
                nb: [
                    "HTML", "CSS", "Js"
                ],
                url: "",
                img: "./images/xhj1.png",
                content: `<h2>项目类型</h2>
                <p>练手单页</p>
                <h2>开发周期</h2>
                <p>1人/10天</p>
                <h2>开发工具</h2>
                <p>Visual Code、Git</p>
                <h2>项目背景</h2>
                <p>第一个练手作品</p>
                <h2>项目技术</h2>
                <p>1、	全端响应式自适应；</p>
                <p>2、	简约风格，与众不同；</p>
                <p>3、	背景视差滚动；</p>
                <p>4、	打字机效果；</p>
                <h2>项目预览</h2>
                <ul>
                    <li><img src="./images/xhj1.png"></li>
                    <li><img src="./images/xhj2.png"></li>
                    <li><img src="./images/xhj3.png"></li>
                    <li><img src="./images/xhj4.png"></li>
                </ul>`,
            },
            {
                name: "ooo",
                text: "oooooo",
                nb: [
                    "HTML", "CSS", "Js", "PHP", "Wordpress"
                ],
                url: "",
                img: "./images/no1.png",
                content: `<h2>项目类型</h2>
                <p>班级官网</p>
                <h2>开发周期</h2>
                <p>1人/4天</p>
                <h2>开发工具</h2>
                <p>Visual Code、Git、WordPress</p>
                <h2>项目背景</h2>
                <p>给班级做一个官网，基于WordPress实现文章发送等功能</p>
                <h2>项目技术</h2>
                <p>1、 全端响应式自适应；</p>
                <p>2、 简约风格，与众不同；</p>
                <p>3、 背景视差滚动；</p>
                <p>4、 打字机效果；</p>
                <h2>项目预览</h2>
                <ul>
                    <li><img src="./images/no1.png"></li>
                    <li><img src="./images/no2.png"></li>
                    <li><img src="./images/no3.png"></li>
                </ul>`,
            }
        ],
        listLoadMore: "查看",
        loadMore: {
            text: "继续浏览",
            class: "resume4"
        }
    },
    contact: {
        title: "联系我",
        list: [{
                name: "Github",
                context: "github.com/GrassyUnknown"
            },
            {
                name: "邮箱",
                context: "zhangzijie.xjtu@outlook.com"
            },
            {
                name: "QQ",
                context: "2964918174"
            },
            {
                name: "微信",
                context: "XJTU_2hang2ijie"
            }
        ]
    }
}