webpackJsonp([5,31],{"8khy":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("mvHQ"),l=a.n(i),n=a("r73Y"),r=a("9MlB"),o={inject:["refresh"],data:function(){return{locationList:[],sumCount:0,staLimit:0,currentPage:1,endLimit:20,formInline:{name:"",status:""},loading:!1,showAddOrUpdate:!1}},created:function(){this.getLocationList(0),this.handleCurrentChange=this.handleCurrentChange()},methods:{getLocationList:function(t){var e=this;this.loading=!0,0==t&&(this.currentPage=1),void 0===t&&(t=(this.currentPage-1)*this.endLimit),this.$http({url:this.$http.adornUrl("/supplier/locationList"),method:"post",data:{name:this.formInline.name,status:this.formInline.status,staLimit:t,endLimit:this.endLimit}}).then(function(t){var a=t.data;e.locationList=a.supplierLocationList,e.sumCount=a.sumCount,e.loading=!1})},handleCurrentChange:function(){var t=this;return this.$JsUtil.debounce(function(e){var a=(e-1)*t.endLimit;t.currentPage=e,t.getLocationList(a)},500)},handleSizeChange:function(t){this.endLimit=t,this.getLocationList(0)},clearSelect:function(){this.formInline={name:"",status:""}},updateStatus:function(t,e){var a=this;this.$http({url:this.$http.adornUrl("/supplier/updateSupplierLocation"),method:"post",data:{id:t,status:e}}).then(function(t){var e=t.data;"成功"===e?a.getLocationList():a.$message.error(e)})},setShowAddOrUpdate:function(t){var e=this;this.showAddOrUpdate=!0;var a=l()(t);this.$nextTick(function(){e.$refs.addOrUpdate.init(JSON.parse(a))})}},components:{Dialog:n.default,addOrUpdate:r.default}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Dialog",{ref:"Dialog"}),t._v(" "),a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.formInline}},[a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.setShowAddOrUpdate("")}}},[t._v("新增")])],1),t._v(" "),a("el-form-item",{attrs:{label:"供应商名称"}},[a("el-input",{staticStyle:{width:"180px"},attrs:{placeholder:"供应商名称"},model:{value:t.formInline.name,callback:function(e){t.$set(t.formInline,"name",e)},expression:"formInline.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"状态"}},[a("el-select",{staticStyle:{width:"120px"},attrs:{placeholder:"选择状态"},model:{value:t.formInline.status,callback:function(e){t.$set(t.formInline,"status",e)},expression:"formInline.status"}},[a("el-option",{attrs:{label:"--  --",value:""}}),t._v(" "),a("el-option",{attrs:{label:"禁用",value:"0"}}),t._v(" "),a("el-option",{attrs:{label:"启用",value:"1"}})],1)],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.clearSelect()}}},[t._v("清空")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.getLocationList(0)}}},[t._v("查询")])],1)],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.locationList,border:"","highlight-current-row":"",height:"60vh"}},[a("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"id",label:"ID",width:"80",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"供应商名称",width:"200",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"categoryid",label:"所属类型",width:"100",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"supplierid1",label:"渠道ID1",width:"100",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"supplierid2",label:"渠道ID2",width:"100",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"supplierid3",label:"渠道ID3",width:"100",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"supplierid4",label:"渠道ID4",width:"100",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"supplierid5",label:"渠道ID5",width:"100",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"supplierid6",label:"渠道ID6",width:"100",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"supplierid7",label:"渠道ID7",width:"100",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"supplierid8",label:"渠道ID8",width:"100",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"status",label:"状态",width:"120",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",{attrs:{type:1===e.row.status?"primary":"danger","disable-transitions":""}},[t._v(t._s(1===e.row.status?"启用":"禁用"))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"sorts",label:"sorts",width:"100",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){t.setShowAddOrUpdate(e.row)}}},[t._v("编辑")]),t._v(" "),a("el-button",{attrs:{type:e.row.status?"danger":"primary",size:"small"},on:{click:function(a){t.updateStatus(e.row.id,e.row.status?0:1)}}},[t._v(t._s(e.row.status?"禁用":"启用"))])]}}])})],1),t._v(" "),a("el-pagination",{attrs:{"current-page":t.currentPage,"page-sizes":[50,100,200],"page-size":t.endLimit,layout:"total, prev, pager, next,sizes",total:t.sumCount},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage=e}}}),t._v(" "),t.showAddOrUpdate?a("add-or-update",{ref:"addOrUpdate",on:{getLocationList:t.getLocationList}}):t._e()],1)},staticRenderFns:[]};var p=a("VU/8")(o,s,!1,function(t){a("dNol")},"data-v-fbbeec92",null);e.default=p.exports},"9MlB":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{title:t.locationData.id?"修改":"新增","close-on-click-modal":!1,visible:t.visible},on:{"update:visible":function(e){t.visible=e}}},[a("el-form",{attrs:{model:t.locationData,"label-width":"100px"},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.dataFormSubmit()}}},[a("el-form-item",{attrs:{label:"供应商名称",prop:"name"}},[a("el-input",{attrs:{placeholder:"公司名称"},model:{value:t.locationData.name,callback:function(e){t.$set(t.locationData,"name",e)},expression:"locationData.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"产品类型",prop:"categoryid"}},[a("el-select",{attrs:{placeholder:"选择产品类型"},model:{value:t.locationData.categoryid,callback:function(e){t.$set(t.locationData,"categoryid",e)},expression:"locationData.categoryid"}},t._l(t.categoryList,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1),t._v(" "),a("el-form-item",{attrs:{label:"渠道1",prop:"supplier1"}},[a("el-select",{attrs:{placeholder:"选择渠道"},model:{value:t.locationData.supplierid1,callback:function(e){t.$set(t.locationData,"supplierid1",e)},expression:"locationData.supplierid1"}},t._l(t.supplierList,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1),t._v(" "),a("el-form-item",{attrs:{label:"渠道2",prop:"supplier2"}},[a("el-select",{attrs:{placeholder:"选择渠道"},model:{value:t.locationData.supplierid2,callback:function(e){t.$set(t.locationData,"supplierid2",e)},expression:"locationData.supplierid2"}},t._l(t.supplierList,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1),t._v(" "),a("el-form-item",{attrs:{label:"渠道3",prop:"supplier3"}},[a("el-select",{attrs:{placeholder:"选择渠道"},model:{value:t.locationData.supplierid3,callback:function(e){t.$set(t.locationData,"supplierid3",e)},expression:"locationData.supplierid3"}},t._l(t.supplierList,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1),t._v(" "),a("el-form-item",{attrs:{label:"渠道4",prop:"supplier4"}},[a("el-select",{attrs:{placeholder:"选择渠道"},model:{value:t.locationData.supplierid4,callback:function(e){t.$set(t.locationData,"supplierid4",e)},expression:"locationData.supplierid4"}},t._l(t.supplierList,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1),t._v(" "),a("el-form-item",{attrs:{label:"渠道5",prop:"supplier5"}},[a("el-select",{attrs:{placeholder:"选择渠道"},model:{value:t.locationData.ssupplierid5,callback:function(e){t.$set(t.locationData,"ssupplierid5",e)},expression:"locationData.ssupplierid5"}},t._l(t.supplierList,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1),t._v(" "),a("el-form-item",{attrs:{label:"渠道6",prop:"supplier6"}},[a("el-select",{attrs:{placeholder:"选择渠道"},model:{value:t.locationData.supplierid6,callback:function(e){t.$set(t.locationData,"supplierid6",e)},expression:"locationData.supplierid6"}},t._l(t.supplierList,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1),t._v(" "),a("el-form-item",{attrs:{label:"渠道7",prop:"supplier7"}},[a("el-select",{attrs:{placeholder:"选择渠道"},model:{value:t.locationData.supplierid7,callback:function(e){t.$set(t.locationData,"supplierid7",e)},expression:"locationData.supplierid7"}},t._l(t.supplierList,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1),t._v(" "),a("el-form-item",{attrs:{label:"渠道8",prop:"supplier8"}},[a("el-select",{attrs:{placeholder:"选择渠道"},model:{value:t.locationData.supplierid8,callback:function(e){t.$set(t.locationData,"supplierid8",e)},expression:"locationData.supplierid8"}},t._l(t.supplierList,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1),t._v(" "),a("el-form-item",{attrs:{label:"状态",size:"mini",prop:"status"}},[a("el-radio-group",{model:{value:t.locationData.status,callback:function(e){t.$set(t.locationData,"status",e)},expression:"locationData.status"}},[a("el-radio",{attrs:{label:1}},[t._v("启用")]),t._v(" "),a("el-radio",{attrs:{label:0}},[t._v("禁用")])],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"顺序",size:"mini",prop:"sorts"}},[a("el-input",{staticStyle:{width:"150px"},attrs:{placeholder:"顺序"},model:{value:t.locationData.sorts,callback:function(e){t.$set(t.locationData,"sorts",e)},expression:"locationData.sorts"}})],1)],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.visible=!1}}},[t._v("取消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dataFormSubmit()}}},[t._v("确定")])],1)],1)},staticRenderFns:[]},l=a("VU/8")({data:function(){return{visible:!1,locationData:{id:0,name:"",categoryid:1,supplierid1:"",supplierid2:"",supplierid3:"",supplierid4:"",supplierid5:"",supplierid6:"",supplierid7:"",supplierid8:"",status:1,sorts:""},supplierList:[],categoryList:[]}},methods:{init:function(t){this.visible=!0,this.locationData=""!==t?t:this.$options.data().locationData,0==this.supplierList.length&&this.getSupplierList(),0==this.categoryList.length&&this.getCatetoryList()},dataFormSubmit:function(){var t=this,e=this.locationData.id?"/supplier/updateSupplierLocation":"/supplier/insertSupplierLocation";this.$http({url:this.$http.adornUrl(e),method:"post",data:this.locationData}).then(function(e){var a=e.data;"成功"===a?(t.visible=!1,t.$message({message:a,type:"success"}),t.$emit("getLocationList")):t.$message.error(a)})},getCatetoryList:function(){var t=this;this.$http({url:this.$http.adornUrl("/goods/categoryIdAndName"),method:"post"}).then(function(e){var a=e.data;t.categoryList=a})},getSupplierList:function(){var t=this;this.$http({url:this.$http.adornUrl("/supplier/supplierIdAndName"),method:"post"}).then(function(e){var a=e.data;t.supplierList=a})}}},i,!1,null,null,null);e.default=l.exports},dNol:function(t,e,a){var i=a("erJz");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("59096f22",i,!0)},erJz:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"\n.el-row[data-v-fbbeec92] {\r\n    margin-bottom: 5px;\n}\n.el-row[data-v-fbbeec92] :last-child {\r\n      margin-bottom: 0;\n}\n.el-col[data-v-fbbeec92] {\r\n    border-radius: 4px;\n}\n.bg-purple-dark[data-v-fbbeec92] {\r\n   \r\n    background: #89aede;\n}\n.bg-purple[data-v-fbbeec92] {\r\n    background: #c7daed;\n}\n.bg-purple-light[data-v-fbbeec92] {\r\n    background: #d2ecf0;\n}\n.grid-content[data-v-fbbeec92] {\r\n    border-radius: 4px;\r\n    min-height: 36px;\n}\n.row-bg[data-v-fbbeec92] {\r\n    padding: 10px 0;\r\n    background-color: #f9fafc;\n}\n.bg-sty[data-v-fbbeec92]{\r\n     height: 30px;\r\n    line-height: 30px;\r\n    text-align: center;\n}\n.money-sty[data-v-fbbeec92]{\r\n    color: rgb(123, 77, 61);\n}\n.btn-size[data-v-fbbeec92]{\r\n    width: 20px;\r\n    height: 20px;\r\n    position: relative;\r\n    \r\n    bottom: 5px;\r\n  border-radius: 50%;\n}\n.btn-size i[data-v-fbbeec92]{\r\n    position: absolute;\r\n    top: 5px;\r\n    left: 5px;\n}\n.text[data-v-fbbeec92] {\r\n    font-size: 14px;\n}\r\n  /* .pagination{\r\n    position: fixed;\r\n    left: 50%;\r\n    transform:translate(-50%,-2vh)\r\n  } */\r\n \r\n",""])}});