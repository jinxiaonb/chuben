

new Vue({
	el:"#cbr", 
	data:function(){
        return {
        	ad:"/img/cbr.jpeg",
          basic:[{
            avator:"/img/wf.jpg",
            title:"联合创始人：王芳",
            desc:"浙江省幼儿园特级教师/正高级教师,全国先进工作者（劳动模范）,原浙江幼师附属幼儿园总园长,教育部专家指导委员会委员,36年幼儿教育经验,擅长幼儿情绪管理,托幼一体化研究,执教箴言：把幼儿园还给孩子，把孩子还给自己",
          },{
            avator:"/img/zxf.jpg",
            title:"课程顾问：章小芬",
            desc:"中学高级教师,市教坛新秀/市学科带头人,27年幼儿教育经验,拥有美国AMS3-6岁教师资格证、蒙特梭利教学法讲师资格证,参与多套省编教材编写,参与编写浙江少儿出版社0-3岁系列丛书,执教箴言：心中有孩子，眼中有孩子，行动中有孩子!",
          },{
            avator:"/img/qxj.jpg",
            title:"乐学城旗舰中心园长：裘小洁",
            desc:"一级教师,市级教坛新秀/ 市级名师培养对象, “名班主任工作室”导师,20年幼儿教育经验,擅长智慧型班主任团队建设、家庭教育指导,参与编写多本书籍公开发行,执教箴言：慈情育人，诗意从教",
          },]
        }
    },
    created:function(){
      localStorage.setItem("title","初本人");
    }
});

