(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{251:function(t,e,n){"use strict";n.r(e);var r=n(8),o=(n(52),n(123),n(41),n(53),n(177),n(42),n(178),n(13),{data:function(){return{searchText:"",dsBhyts:[]}},methods:{timKiem:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.searchText){e.next=2;break}return e.abrupt("return");case 2:return n=t.searchText.split(" ").map((function(t){return t.charAt(0).toUpperCase()+t.slice(1)})).join(" "),r=/[0-9]/g,o=t.searchText.match(r),e.next=7,fetch("https://cmsbudientulap.herokuapp.com/api/bhyts?&name=".concat(o?o.join(""):n)).then((function(t){return t.json()}));case 7:t.dsBhyts=e.sent;case 8:case"end":return e.stop()}}),e)})))()},isConHan:function(t){if(!t)return!1;var e=new Date(t)-new Date;return console.log(Math.ceil(e/864e5)>30),Math.ceil(e/864e5)>30}},mounted:function(){if(this.$route.query.q){var q=this.$route.query.q;this.searchText=q,this.timKiem(q)}},filters:{ngayThang:function(t){return t?new Date(t).toLocaleDateString():""},ngayThangString:function(t){return t?isNaN(t)?"":new Date([t.substr(0,4),t.substr(4,2),t.substr(6,2)].join("-")).toLocaleDateString():""},soNgay:function(t){if(!t)return"";var e=new Date(t)-new Date;return(e<0?"Đã hết ":"Còn ")+Math.abs(Math.ceil(e/864e5))+" ngày"}}}),l=n(21),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"relative py-20"},[n("div",{staticClass:"bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20",staticStyle:{height:"80px"}},[n("svg",{staticClass:"absolute bottom-0 overflow-hidden",attrs:{xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none",version:"1.1",viewBox:"0 0 2560 100",x:"0",y:"0"}},[n("polygon",{staticClass:"text-white fill-current",attrs:{points:"2560 0 2560 100 0 100"}})])]),t._v(" "),n("div",{staticClass:"container mx-auto px-4"},[n("div",{staticClass:"items-center flex flex-wrap"},[n("div",{staticClass:"w-full md:w-4/12 ml-auto mr-auto px-4"},[n("label",{staticClass:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",attrs:{for:"grid-first-name"}},[t._v("\n                Họ tên:\n            ")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchText,expression:"searchText"}],staticClass:"appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",attrs:{id:"grid-first-name",type:"text",placeholder:"Tên"},domProps:{value:t.searchText},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.timKiem()},input:function(e){e.target.composing||(t.searchText=e.target.value)}}}),t._v(" "),n("p",{staticClass:"text-red-500 text-xs italic mb-5"},[t._v("Có thể tìm theo số điện thoại, mã số thẻ BHYT hoặc tên.")]),t._v(" "),n("div",{staticClass:"flex items-center justify-between "},[n("button",{staticClass:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",attrs:{type:"button"},on:{click:function(e){return t.timKiem()}}},[t._v("\n                    Tra cứu\n                ")]),t._v(" "),n("a",{staticClass:"inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800",attrs:{href:"tel:0978333963"}},[t._v("\n                    Bạn cần trợ giúp?\n                ")])])]),t._v(" "),n("div",{staticClass:"w-full md:w-4/12 ml-auto mr-auto px-4"},[t._l(t.dsBhyts,(function(e){return n("ul",{key:e.maSoBhxh,staticClass:"divide-y divide-gray-200 dark:divide-gray-700 mt-10"},[n("li",{class:[e.coTheUuTienCaoHon?"bg-yellow-100 border-yellow-500":t.isConHan(e.denNgayDt)?"bg-green-100 border-green-500":"bg-gray-100 border-gray-500","py-3 sm:py-4 border-t-4 rounded mb-5 shadow"]},[n("div",{staticClass:"flex-col items-center space-x-4"},[n("div",{staticClass:"min-w-0 mx-5 mb-5"},[n("p",{staticClass:"text-sm font-medium text-gray-900 dark:text-white text-xl text-bold mb-2"},[t._v("\n                                "+t._s(e.hoTen)+"\n                                "+t._s(t._f("ngayThang")(e.ngaySinhDt))+"\n                            ")]),t._v(" "),n("p",{staticClass:"text-sm text-gray-500 dark:text-gray-400"},[t._v("\n                                Số thẻ BHYT: "+t._s(e.soTheBhyt)+"\n                            ")]),t._v(" "),n("p",{staticClass:"text-sm text-gray-500 dark:text-gray-400"},[t._v("\n                                Nơi KCB: "+t._s(e.maKCB)+"\n                            ")]),t._v(" "),n("p",{staticClass:"text-sm text-gray-500 dark:text-gray-400"},[t._v("\n                                Từ ngày: "+t._s(t._f("ngayThang")(e.tuNgayDt))+"\n                            ")]),t._v(" "),n("p",{staticClass:"text-sm text-gray-500 dark:text-gray-400 text-xl"},[t._v("\n                                Đến ngày: "+t._s(t._f("ngayThang")(e.denNgayDt))+"\n                            ")]),t._v(" "),n("p",{staticClass:"text-sm text-gray-500 dark:text-gray-400"},[t._v("\n                                Ngày 5 năm liên tục: "+t._s(t._f("ngayThangString")(e.ngay5Nam))+"\n                            ")])]),t._v(" "),n("div",{staticClass:"flex items-center justify-between text-base font-semibold text-gray-900 dark:text-white"},[n("div",[t._v(t._s(t._f("soNgay")(e.denNgayDt)))]),t._v(" "),t.isConHan(e.denNgayDt)?t._e():n("a",{staticClass:"mr-5 bg-gray-300 hover:bg-gray-400 text-green-500 font-bold py-2 px-4 rounded inline-flex items-center",attrs:{href:"tel:0978333963"}},[t._v("Mua ngay")])])])])])})),t._v(" "),t._m(0)],2)])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"text-center text-gray-500 text-xs"},[t._v("\n                ©2022 bởi "),n("a",{attrs:{href:"https://lovanlong.ga"}},[t._v("Lỗ Văn Long")]),t._v(".\n            ")])}],!1,null,null,null);e.default=component.exports}}]);