Page({
  data: {
    curNav: 0, curIndex: 0, 
    sortType:[
      {
        sortName: "IT·互联网", sortID: 0,ishaveChild: true,
        courseType: [
                       { courseTypeID: 0 ,  courseTypeName:"互联网产品",
            course: [{ courseID: 0, courseName: "产品策划" }, { courseID: 1, courseName: "产品运营"},
              { courseID: 2, courseName: "游戏策划" }, { courseID: 3, courseName: "游戏运营" },
              { courseID: 4, courseName: "新媒体营销" },],},
                    
          {
            courseTypeID: 1, courseTypeName: "编程语言",
            course: [{ courseID: 0, courseName: "C" }, { courseID: 1, courseName: "C++" },
            { courseID: 2, courseName: "Java" }, { courseID: 3, courseName: "PHP" },
            { courseID: 4, courseName: "C#/.Net" },],
          },
          {
            courseTypeID: 2, courseTypeName: "前端开发",
            course: [{ courseID: 0, courseName: "前端开发" }, { courseID: 1, courseName: "自研前端课" }, ],
          },
          {
            courseTypeID: 3, courseTypeName: "移动开发",
            course: [{ courseID: 0, courseName: "Android开发" }, { courseID: 1, courseName: "iOS开发" },
            { courseID: 2, courseName: "微信开发" }, { courseID: 3, courseName: "跨平台APP开发" },
            { courseID: 4, courseName: "其他" },],
          },
          {
            courseTypeID: 4, courseTypeName: "网络与运维",
            course: [{ courseID: 0, courseName: "Linux运维" }, { courseID: 1, courseName: "Python自动化运维" },
            { courseID: 2, courseName: "DevOps" }, { courseID: 3, courseName: "信息安全" },
            { courseID: 4, courseName: "其他" },],
          },
          {
            courseTypeID: 5, courseTypeName: "软件研发",
            course: [{ courseID: 0, courseName: "敏捷开发" }, { courseID: 1, courseName: "软件测试" },
            { courseID: 2, courseName: "软件研发" }, { courseID: 3, courseName: "其他" },
           ,],
          },
          {
            courseTypeID: 6, courseTypeName: "云计算与大数据",
            course: [{ courseID: 0, courseName: "云计算" }, { courseID: 1, courseName: "大数据" },
            { courseID: 2, courseName: "人工智能" }, { courseID: 3, courseName: "物联网" },
            { courseID: 4, courseName: "区块链" },],
          },
          {
            courseTypeID: 7, courseTypeName: "认证考试",
            course: [{ courseID: 0, courseName: "思科考试" }, { courseID: 1, courseName: "华为认证" },
            { courseID: 2, courseName: "红帽认证" }, { courseID: 3, courseName: "软考" },
            { courseID: 4, courseName: "其他" },],
          },
          ], },
      {
        sortName: "创作·设计", sortID: 1, ishaveChild: true,
        courseType: [
          {
            courseTypeID: 0, courseTypeName: "平面设计",
            course: [{ courseID: 0, courseName: "电商美工" }, { courseID: 1, courseName: "综合平面设计" },
            { courseID: 2, courseName: "摄影后期" }, 
            ],
          },

          {
            courseTypeID: 1, courseTypeName: "设计软件",
            course: [{ courseID: 0, courseName: "Photoshop" }, { courseID: 1, courseName: "InDesign" },
            { courseID: 2, courseName: "Axure" }, { courseID: 3, courseName: "CDR" },
            { courseID: 4, courseName: "Illustrator" },],
          },
          {
            courseTypeID: 2, courseTypeName: "环境艺术设计",
            course: [{ courseID: 0, courseName: "室内设计" }, { courseID: 1, courseName: "建筑设计" },],
          },
          {
            courseTypeID: 3, courseTypeName: "绘画创作",
            course: [{ courseID: 0, courseName: "插画漫画" }, { courseID: 1, courseName: "国画油画" },
            { courseID: 2, courseName: "水彩水粉画" }, { courseID: 3, courseName: "素描" },
            { courseID: 4, courseName: "手画其他" },],
          },
          {
            courseTypeID: 4, courseTypeName: "工业产品设计",
            course: [{ courseID: 0, courseName: "产品设计" }, { courseID: 1, courseName: "模具设计" },
            { courseID: 2, courseName: "机械设计" }, { courseID: 3, courseName: "包装设计" },
            { courseID: 4, courseName: "其他" },],
          },
        ],},
      {
        sortName: "电商·营销", sortID: 2, ishaveChild: true,
        courseType: [
          {
            courseTypeID: 0, courseTypeName: "电商平台",
            course: [{ courseID: 0, courseName: "淘宝营销" }, { courseID: 1, courseName: "拼多多营销" },
            { courseID: 2, courseName: "京东营销" }, 
            ],
          },

          {
            courseTypeID: 1, courseTypeName: "跨境电商",
            course: [{ courseID: 0, courseName: "亚马逊" }, { courseID: 1, courseName: "速卖通" },
            { courseID: 2, courseName: "阿里国际站" }, { courseID: 3, courseName: "独立站" },
            { courseID: 4, courseName: "新兴平台" },],
          },
          {
            courseTypeID: 2, courseTypeName: "社交电商",
            course: [{ courseID: 0, courseName: "抖音电商" }, { courseID: 1, courseName: "微信电商" },
            { courseID: 2, courseName: "社群营销" }, 
            ],
            
          },
          {
            courseTypeID: 3, courseTypeName: "其他",
            course: [{ courseID: 0, courseName: "其他" }, ],
          },
        ],},
      {
        sortName: "职业·考证", sortID: 3, ishaveChild: true,
        courseType: [
          {
            courseTypeID: 0, courseTypeName: "公考求职",
            course: [{ courseID: 0, courseName: "公务员" }, { courseID: 1, courseName: "事业单位" },
            { courseID: 2, courseName: "教师考试" }, { courseID: 3, courseName: "金融银行" },
            { courseID: 4, courseName: "企业招聘" },],
          },

          {
            courseTypeID: 1, courseTypeName: "法学院",
            course: [{ courseID: 0, courseName: "法律硕士" }, { courseID: 1, courseName: "法律职业资格" },
            { courseID: 2, courseName: "法律实务" }, { courseID: 3, courseName: "趣味算法" },
            { courseID: 4, courseName: "警法考试" },],
          },
          {
            courseTypeID: 2, courseTypeName: "财会金融",
            course: [{ courseID: 0, courseName: "会计职称" }, { courseID: 1, courseName: "注册会计师" },],
          },
          {
            courseTypeID: 3, courseTypeName: "医疗卫生",
            course: [{ courseID: 0, courseName: "执业药师" }, { courseID: 1, courseName: "执业医师" },
            ],
          },
          {
            courseTypeID: 4, courseTypeName: "建筑工程",
            course: [{ courseID: 0, courseName: "一级建造师" }, { courseID: 1, courseName: "二级建造师" },
            { courseID: 2, courseName: "消防工程师" }, { courseID: 3, courseName: "工程造价" },
            { courseID: 4, courseName: "工程施工" },],
          },
          {
            courseTypeID: 5, courseTypeName: "职业技能",
            course: [{ courseID: 0, courseName: "人力资源" }, { courseID: 1, courseName: "办公软件" },
            { courseID: 2, courseName: "计算机等级考试" }, { courseID: 3, courseName: "其他" } ,],  },
         
        ], },
      {
        sortName: "语言·留学", sortID: 4, ishaveChild: true,
        courseType: [
          {
            courseTypeID: 0, courseTypeName: "实用英语",
            course: [{ courseID: 0, courseName: "英语口语" }, { courseID: 1, courseName: "学术英语" },
            { courseID: 2, courseName: "新概念英语" }, { courseID: 3, courseName: "青少年英语" },
            { courseID: 4, courseName: "词汇语法" },],
          },

          {
            courseTypeID: 1, courseTypeName: "出国留学",
            course: [{ courseID: 0, courseName: "雅思" }, { courseID: 1, courseName: "托福" },
            { courseID: 2, courseName: "K12留学" }, { courseID: 3, courseName: "研究生留学" },
            { courseID: 4, courseName: "留学指导" },],
          },
          {
            courseTypeID: 2, courseTypeName: "英语四六级",
            course: [{ courseID: 0, courseName: "英语四级" }, { courseID: 1, courseName: "英语六级" },],
          },
          {
            courseTypeID: 3, courseTypeName: "日语",
            course: [{ courseID: 0, courseName: "日语初级" }, { courseID: 1, courseName: "日语高级" },
            ],
          },
          {
            courseTypeID: 4, courseTypeName: "韩语",
            course: [{ courseID: 0, courseName: "韩语零基础" }, { courseID: 1, courseName: "韩语初级" },
            { courseID: 2, courseName: "韩语中高级" }, { courseID: 3, courseName: "韩流文化" },
            { courseID: 4, courseName: "TOPIK考试" },],
          },
          {
            courseTypeID: 5, courseTypeName: "小语种",
            course: [{ courseID: 0, courseName: "法语" }, { courseID: 1, courseName: "德语" },
            { courseID: 2, courseName: "西班牙语" }, { courseID: 3, courseName: "葡萄牙语" },],
          },

        ],
      },]
    },
  upper: function (e) {
    console.log(e)
  },
  lower: function (e) {
    console.log(e)
  },
  scroll: function (e) {
    console.log(e)
  },
  tap: function (e) {
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
  },

  switchRightTab: function (e) {
    // 获取item项的id，和数组的下标值  
    let id = e.target.dataset.id,
      index = parseInt(e.target.dataset.index);
    console.log(e);
    // 把点击到的某一项，设为当前index  
    this.setData({
      curNav: id,
      curIndex: index
    })
    this
  },
})