(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2340688d"],{"0ef3":function(e,t,n){},"1e4f":function(e,t,n){"use strict";n("0ef3")},9133:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-table",{staticStyle:{width:"100%"},attrs:{border:"",data:e.records}},[n("el-table-column",{attrs:{type:"index",label:"序号",width:"80"}}),n("el-table-column",{attrs:{prop:"skuName",label:"名称",width:"width"}}),n("el-table-column",{attrs:{prop:"skuDesc",label:"描述",width:"width"}}),n("el-table-column",{attrs:{label:"默认图片",width:"110"},scopedSlots:e._u([{key:"default",fn:function(e){var t=e.row;e.$index;return[n("img",{staticStyle:{width:"100px",height:"100px"},attrs:{src:t.skuDefaultImg,alt:""}})]}}])}),n("el-table-column",{attrs:{prop:"weight",label:"重量",width:"80"}}),n("el-table-column",{attrs:{prop:"price",label:"价格",width:"80"}}),n("el-table-column",{attrs:{prop:"prop",label:"操作",width:"width"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.row;t.$index;return[0==s.isSale?n("el-button",{attrs:{type:"success",icon:"el-icon-sort-down",size:"mini"},on:{click:function(t){return e.sale(s)}}}):n("el-button",{attrs:{type:"success",icon:"el-icon-sort-up",size:"mini"},on:{click:function(t){return e.cancel(s)}}}),n("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"mini"},on:{click:e.edit}}),n("el-button",{attrs:{type:"info",icon:"el-icon-info",size:"mini"},on:{click:function(t){return e.geSkuInfo(s)}}}),n("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini"}})]}}])})],1),n("el-pagination",{staticStyle:{"margin-top":"20px",textAlign:"center"},attrs:{"current-page":e.page,"page-sizes":[3,5,8],"page-size":e.limit,layout:"prev, pager, next, jumper,->,sizes,total",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.getSkuList}}),n("el-drawer",{attrs:{visible:e.show,"show-close":!1,size:"50%"},on:{"update:visible":function(t){e.show=t}}},[n("el-row",[n("el-col",{attrs:{span:5}},[e._v("名称")]),n("el-col",{attrs:{span:16}},[e._v(e._s(e.skuInfo.skuName))])],1),n("el-row",[n("el-col",{attrs:{span:5}},[e._v("描述")]),n("el-col",{attrs:{span:16}},[e._v(e._s(e.skuInfo.skuDesc))])],1),n("el-row",[n("el-col",{attrs:{span:5}},[e._v("价格")]),n("el-col",{attrs:{span:16}},[e._v(e._s(e.skuInfo.price))])],1),n("el-row",[n("el-col",{attrs:{span:5}},[e._v("平台属性")]),n("el-col",{attrs:{span:16}},[e._l(e.skuInfo.skuAttrValueList,(function(t,s){return n("el-tag",{key:t.id,staticStyle:{"margin-right":"10px"},attrs:{type:"success"}},[e._v(e._s(t.attrId)+"-"+e._s(t.valueId))])}))],2)],1),n("el-row",[n("el-col",{attrs:{span:5}},[e._v("商品图片")]),n("el-col",{attrs:{span:16}},[n("el-carousel",{attrs:{height:"150px"}},e._l(e.skuInfo.skuImageList,(function(e){return n("el-carousel-item",{key:e.id},[n("img",{attrs:{src:e.imgUrl,alt:""}})])})),1)],1)],1)],1)],1)},a=[],r=n("c7eb"),i=n("1da1"),c={name:"Sku",data:function(){return{page:1,limit:5,records:[],total:0,skuInfo:{},show:!1}},mounted:function(){this.getSkuList()},methods:{getSkuList:function(){var e=arguments,t=this;return Object(i["a"])(Object(r["a"])().mark((function n(){var s,a,i,c;return Object(r["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return s=e.length>0&&void 0!==e[0]?e[0]:1,t.page=s,a=t.page,i=t.limit,n.next=5,t.$API.sku.reqSkuList(a,i);case 5:c=n.sent,console.log(c),200==c.code&&(t.total=c.data.total,t.records=c.data.records);case 8:case"end":return n.stop()}}),n)})))()},handleSizeChange:function(e){this.limit=e,this.getSkuList()},sale:function(e){var t=this;return Object(i["a"])(Object(r["a"])().mark((function n(){var s;return Object(r["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$API.sku.reqSale(e.id);case 2:s=n.sent,(s.code=200)&&(e.isSale=1,t.$message({type:"success",message:"上架成功"}));case 4:case"end":return n.stop()}}),n)})))()},cancel:function(e){var t=this;return Object(i["a"])(Object(r["a"])().mark((function n(){var s;return Object(r["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$API.sku.reqCancel(e.id);case 2:s=n.sent,(s.code=200)&&(e.isSale=0,t.$message({type:"success",message:"下架成功"}));case 4:case"end":return n.stop()}}),n)})))()},edit:function(){this.$message({type:"info",message:"还没开发"})},geSkuInfo:function(e){var t=this;return Object(i["a"])(Object(r["a"])().mark((function n(){var s;return Object(r["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.show=!0,n.next=3,t.$API.sku.reqSkuById(e.id);case 3:s=n.sent,console.log(s),(s.code=200)&&(t.skuInfo=s.data);case 6:case"end":return n.stop()}}),n)})))()}}},l=c,o=(n("1e4f"),n("2877")),u=Object(o["a"])(l,s,a,!1,null,null,null);t["default"]=u.exports}}]);