webpackJsonp([32],{xmu3:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{title:t.goodsData.id?"修改":"新增","close-on-click-modal":!1,visible:t.visible},on:{"update:visible":function(e){t.visible=e}}},[a("el-form",{attrs:{model:t.goodsData,rules:t.dataRule,"label-width":"80px"},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.dataFormSubmit()}}},[a("el-form-item",{attrs:{label:"产品编号",prop:"sn"}},[a("el-input",{attrs:{placeholder:"产品编号"},model:{value:t.goodsData.sn,callback:function(e){t.$set(t.goodsData,"sn",e)},expression:"goodsData.sn"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"产品名称",prop:"name"}},[a("el-input",{attrs:{placeholder:"产品名称"},model:{value:t.goodsData.name,callback:function(e){t.$set(t.goodsData,"name",e)},expression:"goodsData.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"产品面值",prop:"price"}},[a("el-input",{attrs:{placeholder:"产品面值"},model:{value:t.goodsData.price,callback:function(e){t.$set(t.goodsData,"price",e)},expression:"goodsData.price"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"业务类型",prop:"categoryid"}},[a("el-select",{attrs:{placeholder:"业务类型"},model:{value:t.goodsData.categoryid,callback:function(e){t.$set(t.goodsData,"categoryid",e)},expression:"goodsData.categoryid"}},t._l(t.goodsCatetoryList,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1),t._v(" "),a("el-form-item",{attrs:{label:"产品类型",prop:"fromid"}},[a("el-select",{attrs:{placeholder:"产品类型"},model:{value:t.goodsData.fromid,callback:function(e){t.$set(t.goodsData,"fromid",e)},expression:"goodsData.fromid"}},t._l(t.cashierCatetoryList,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1),t._v(" "),a("el-form-item",{attrs:{label:"是否上架",size:"mini",prop:"status"}},[a("el-radio-group",{model:{value:t.goodsData.status,callback:function(e){t.$set(t.goodsData,"status",e)},expression:"goodsData.status"}},[a("el-radio",{attrs:{label:0}},[t._v("否")]),t._v(" "),a("el-radio",{attrs:{label:1}},[t._v("是")])],1)],1)],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.visible=!1}}},[t._v("取消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dataFormSubmit()}}},[t._v("确定")])],1)],1)},staticRenderFns:[]},s=a("VU/8")({data:function(){return{visible:!1,goodsCatetoryList:[],cashierCatetoryList:[],goodsData:{id:0,sn:"",name:"",price:"",categoryid:"",fromid:"",status:1},dataRule:{sn:[{required:!0,message:"产品编号为空",trigger:"blur"}],price:[{required:!0,message:"面值为空",trigger:"blur"}]}}},methods:{init:function(t,e,a){this.visible=!0,this.goodsData=""!==t?t:this.$options.data().goodsData,this.goodsCatetoryList=e,this.cashierCatetoryList=a},dataFormSubmit:function(){var t=this,e=this.goodsData.id?"/goods/updateGoodsList":"/goods/insterGoods";this.$http({url:this.$http.adornUrl(e),method:"post",data:this.goodsData}).then(function(e){var a=e.data;"成功"===a?(t.visible=!1,t.$message({message:a,type:"success"}),t.$emit("getGoodsList")):t.$message.error(a)})}}},o,!1,null,null,null);e.default=s.exports}});