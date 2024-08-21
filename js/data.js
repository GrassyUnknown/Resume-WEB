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
            <span></span>曾获<b>蓝桥杯国赛二等奖</b>，<b>ICPC陕西省赛银奖</b>，<b>全国大学生软件测试大赛二等奖</b>，<b>全国大学生生物医学工程竞赛总决赛二等奖</b>，<b>小米AIoT训练营优秀奖</b>等奖项<br />
            <span></span>前三学年平均学分成绩<b>86.85</b>，排名约<b>30/157</b>，其中2022-2023学年综测排名<b>12/157</b><br />
            <span></span>四级成绩<b>637</b>，六级成绩<b>474</b>，CCF-CSP认证成绩<b>365</b>（全国前1.42%）<br />
            <span></span>曾获<b>校级二等奖学金</b>，<b>优秀学生</b>，<b>校网络管理协会优秀社员</b>，<b>校“七星杯”立直麻将竞赛第四名</b>等荣誉。<br />
            `
        },
        ability: [{
                icon: "fa-html5",
                title: "Java",
                subTitle: "Web前后端、数据库、面向对象应用程序",
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
                    "操作系统", "C/C++", "ArkTS", "Linux", "测试", "开发"
                ],
                url: "https://github.com/GrassyUnknown/Health-Life-HarmonyOS-Next",
                img: "./images/project1.png",
                content: `<h2>项目类型</h2>
                <p>实习</p>
                <h2>实习周期</h2>
                <p>2024年6月19日 至今</p>
                <h2>开发工具</h2>
                <p>DevEco、Git、VSCode Huawei、Mate 60 Pro及华为内部开发工具</p>
                <h2>实习介绍</h2>
                <p>在HarmonyOS菁英班中，我对鸿蒙架构和特性形成了深刻理解，讲师精彩的讲解和同学们提出的问题都让我受益匪浅。</p>
                <p>理论学习之后，我们实现了运动健康鸿蒙应用，让我感受到了技术转化为实际产品的乐趣。</p>
                <p>在部门项目实践阶段，我参与了鸿蒙软总线发现模块的开发与维护。</p>
                <p>这一过程中，我了解了多种互联技术和规范，通过自主编写代码实现了基于BLE的设备发现并进行测试，见证了设备间无缝互联的神奇。</p>
                <p>同时，我还参与到开源鸿蒙和鸿蒙Next操作系统的共建之中，修改代码、提交pr，深刻感受到了代码规范的重要性。</p>
                <h2>工作内容展示</h2>
                <ul>
                    <li><img src="./images/project1-1.png"></li>
                    <li><img src="./images/project1-2.png"></li>
                </ul>
                `
            },
            {
                name: "小米AIoT",
                text: "单片机开发",
                nb: [
                    "C/C++", "Keil", "GD32", "ARM", "I2C"
                ],
                url: "https://github.com/GrassyUnknown/Xiaomi-AIoT-GD32F450",
                img: "./images/project2.jpg",
                content: `<h2>项目类型</h2>
                <p>企业活动训练营</p>
                <h2>开发周期</h2>
                <p>2023年5月 – 2023年6月，3人 2月</p>
                <h2>开发工具</h2>
                <p>Keil 5、小米公司开发板、GD32单片机、ARM Complier</p>
                <h2>项目背景</h2>
                <p>项目旨在模拟智能家居场景，通过编程实现器件的互联互通。</p>
                <h2>项目成果</h2>
                <p>利用小米公司提供的开发板（包括GD32F450ZK单片机、 SHT35温湿度传感器、基于HT16K33的按键、数码等十余个子板），我带领小组成员逐步攻坚克难，学习IIC等底层通信原理，实现单片机与传感器之间的通信。</p>
                <p>实践最终形成简易的多功能智能风扇、温湿度计、窗帘机，荣获训练营优秀奖（2/21）、优秀营员。</p>
                `,
            },
            {
                name: "IHC图像生成",
                text: "生物医学工程竞赛",
                nb: [
                    "Python", "Diffusion Model", "GAN", "U-Net", "深度学习"
                ],
                url: "https://bme.xjtu.store",
                img: "./images/project3.png",
                content: `<h2>项目类型</h2>
                <p>竞赛</p>
                <h2>开发周期</h2>
                <p>2024年4月 – 2024年7月，5人 4月</p>
                <h2>开发工具</h2>
                <p>Pycharm、VSCode、RTX 4090、Github</p>
                <h2>项目背景</h2>
                <p>本项目旨在利用人工智能技术改进乳腺癌的诊断和治疗过程。</p>
                <p>由于临床上对肿瘤的精准诊疗离不开免疫组化染色，而相比于临床常见的苏木精-伊红染色，免疫组化染色成本高昂、技术要求高、时间消耗相对较多。</p>
                <p>因此，本项目设计并实现了一个生成式的深度学习模型，用以从苏木精-伊红染色的乳腺癌组织病理图像中生成可靠的免疫组化染色乳腺癌组织病理图像。</p>
                <h2>项目成果</h2>
                <p>我们以GAN模型为基础，添加了注意力机制，采用处理过的的BCI数据进行了模型的训练，最终能够较为准确地从苏木精-伊红染色的乳腺癌组织病理图像中生成可靠的免疫组化染色乳腺癌组织病理图像。</p>
                <p>经过大量实验验证，我们的模型不仅展现出卓越的性能，其中PSNR和SSIM分别达到了22.047和0.5684，而且在视觉效果上接近真实的IHC染色图像，结构完整性和细节保留方面也达到了较高标准。</p>
                <p>随着技术的不断进步和医疗数据积累，该项目未来有望在个性化治疗选择和预后评估中发挥关键作用，为乳腺癌患者提供更精准的医疗服务，改善患者生活质量。</p>
                <h2>说明</h2>
                <p>由于提供外网服务的服务器到期，目前网站在线生成功能已经失效，短期内不会恢复。</p>
                <h2>项目预览</h2>
                <ul>
                    <li><img src="./images/project3-1.png"></li>
                </ul>
                `
            },
            {
                name: "点评大数据",
                text: "大数据推荐",
                nb: [
                    "Java Web", "Hadoop", "Hive", "Linux", "Python", "ALS"
                ],
                url: "https://github.com/GrassyUnknown/Review-Bigdata-XJTUSE",
                img: "./images/project4.png",
                content: `<h2>项目类型</h2>
                <p>实习项目（跟随学院）</p>
                <h2>开发周期</h2>
                <p>2023年12月 – 2024年1月，4人 20天</p>
                <h2>开发工具</h2>
                <p>VSCode、IntelliJ IDEA、Postman、Axure、Mysql、Hadoop、Hive、Zeppelin、Gitee</p>
                <h2>项目背景</h2>
                <p>项目旨在模仿大众点评等应用软件，使用国外开源数据集完成大数据分析、搜索推荐等功能，并提供友好的用户界面。</p>
                <h2>项目成果</h2>
                <p>基本完善的用户界面、大数据看板系统、大数据存储后台、搜索推荐算法</p>
                <h2>项目技术</h2>
                <p>涉及的技术包括Spark/Hive/Hadoop等大数据技术、vue/springboot前后端和ALS搜索推荐算法。</p>
                `,
            },
            {
                name: "酒店管理系统",
                text: "前后端",
                nb: [
                    "Vue", "Spring Boot", "Java", "Mybatis", "项目管理"
                ],
                url: "https://github.com/GrassyUnknown/Hotelbook-XJTUSE",
                img: "./images/project5.png",
                content: `<h2>项目类型</h2>
                <p>练手项目（跟随课程）</p>
                <h2>开发周期</h2>
                <p>2023年11月 - 2023年12月，7人 2月</p>
                <h2>开发工具</h2>
                <p>VSCode、IntelliJ IDEA、Mysql、Postman、Gitee</p>
                <h2>项目背景</h2>
                <p>实现房间管理、订房、客房服务、餐饮服务的Web系统，并实践项目管理方法</p>
                <h2>项目技术</h2>
                <p>项目基于Java Web（Springboot + vue），注重对项目管理的应用，包括需求分析、文档编写、质量保证等过程。</p>
                <p>项目探索了如何高效地进行项目的分工开发、质量保证并管理项目的进度。</p>
                <h2>项目成果</h2>
                <p>能够基本实现酒店管理和预定功能，并具有友好的用户界面设计。</p>
                `,
            },
            {
                name: "信息管理系统",
                text: "前后端",
                nb: [
                    "Vue", "HTML/JS", "Tomcat", "Spring Boot"
                ],
                url: "about:blank",
                img: "./images/project6.png",
                content: `<h2>项目类型</h2>
                <p>实习项目（跟随学院）</p>
                <h2>开发周期</h2>
                <p>2023年6月 - 2023年7月，7人 20天</p>
                <h2>开发工具</h2>
                <p>Visual Code、IntelliJ IDEA、Postman、Gitee、Mysql</p>
                <h2>项目技术</h2>
                <p>HTML/JS，Tomcat</p>
                <h2>项目成果</h2>
                <p>管理（增删改查）用户信息、校园卡信息、学生信息、新闻公告等，实现了分页查找、权限校验和相对美观的操作页面</p>
                `,
            },
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