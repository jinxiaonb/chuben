

new Vue({
	el:"#cbr", 
	data:function(){
        return {
        	ad:"/img/cbr.jpeg",
          basic:[{
            avator:"/img/wf.jpg",
            title:"联合创始人：王芳",
            desc:"由浙江省特级教师、原浙师大幼教集团总园长、被坊间誉为“首席园长”的王芳园长掌舵，课程研发专家顾问来自北师大、南师大、华师大、浙师大等国内知名高校。",
          },{
            avator:"/img/zxf.jpg",
            title:"课程顾问：章小芬",
            desc:"授课教师均为学前教育专业毕业，持幼儿教师资格证，至少拥有2年以上早教经验，全部通过初本幼园的入职培训及考试，熟知2-3岁幼儿身心发展特点和课程实施要领。",
          },{
            avator:"/img/qxj.jpg",
            title:"乐学城旗舰中心园长：裘小洁",
            desc:"每班配备两名教师一名保育员，保育员招收亦是经过层层把关与专业培训，可及时响应2-3岁低幼儿童的保育需求，辅助班级教师一起促进每一名孩子的健康成长。",
          },]
        }
    },
    created:function(){
      localStorage.setItem("title","初本人");
    }
});

