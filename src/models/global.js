//全局需要使用的一些仓库数据

export default {
	namespaced:"global",
	state:{
		//菜单集合
		menus:[
			{id:1, icon:"home", name:"首页", href:"/"},
			{id:2, icon:"user", name:"用户管理", href:"/user/manage"}
		]
	}
}
