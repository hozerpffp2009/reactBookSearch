(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,n){e.exports=n(61)},37:function(e,t,n){},38:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(30),i=n.n(r),l=(n(37),n(8)),c=n(9),s=n(11),u=n(10),h=n(12),d=n(13),p=n(1),m=(n(38),n(6)),k=n(16),v=n.n(k),b={getBooks:function(){return v.a.get("/api/books")},searchBooks:function(e){return v.a.post("/search",{title:e})},addBook:function(e){return v.a.post("/api.books,bookData")},deleteBook:function(e){return v.a.delete("/api/books/${id}")}};var f=function(e){return o.a.createElement("div",{id:"searchContainer"},o.a.createElement("h3",null,"React Book Search"),o.a.createElement("form",{id:"bookSearch"},o.a.createElement("label",{htmlFor:"bookInput",form:"bookSearch"},"Type your favorite book:"),o.a.createElement("br",null),o.a.createElement("input",{type:"text",name:"bookInput",form:"bookSearch",onChange:function(t){return e.handleFormChange(t)},placeholder:"Book Title",required:!0}),o.a.createElement("br",null),o.a.createElement("button",{type:"submit",onClick:function(t){return e.handleSearchClick(t)}},"Search")))},E=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleSaveClick=function(e){this.setState({saved:!0});var t={title:this.props.title,authors:this.props.authors,link:this.props.link,img:this.props.img,description:this.props.description};e.preventDefault(),b.addBookToDB(t).then(function(e){console.log(e)}).catch(function(e){console.log("Database error",e)})},n.state={saved:!1,deleted:!1},n.handleSaveClick=n.handleSaveClick.bind(Object(m.a)(Object(m.a)(n))),n.handleDeleteClick=n.handleDeleteClick.bind(Object(m.a)(Object(m.a)(n))),n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"handleDeleteClick",value:function(e){var t=this;this.setState({deleted:!0}),e.preventDefault(),b.deleteBook(this.props.id).then(function(e){console.log(e),d.a.dispatch(t.props.location,null)}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return o.a.createElement("div",{className:"bookResult",id:this.props.id?this.props.id:null,style:{display:this.state.deleted?"none":"block"}},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"aboutBook"},o.a.createElement("h4",null,this.props.title),o.a.createElement("p",null,"By: ",this.props.authors?this.props.authors.join(", "):"N/A")),o.a.createElement("div",{className:"btnDiv"},this.props.link?o.a.createElement("a",{href:this.props.link,target:"_blank",rel:"noopener noreferrer"},o.a.createElement("button",{type:"button",name:"view"},"View")):null,"/"===this.props.path?o.a.createElement("button",{type:"button",name:"save",onClick:this.handleSaveClick,disabled:this.state.saved},this.state.saved?"Saved":"Save"):o.a.createElement("button",{type:"button",name:"Delete",onClick:this.handleDeleteClick,disabled:this.state.deleted},"Delete"))),o.a.createElement("div",{className:"row"},this.props.img?o.a.createElement("img",{src:this.props.img.smallThumbnail?this.props.img.smallThumbnail:this.props.img.thumbnail?this.props.img.thumbnail:"",alt:"book cover"}):null,o.a.createElement("p",null," ",this.props.description?this.props.description:"N/A"," ")))}}]),t}(o.a.Component);var g=function(e){return"/"===e.path?o.a.createElement("div",{id:"results"},o.a.createElement("h3",null,"Results Found"),e.bookData.map(function(t){var n=t.volumeInfo;return o.a.createElement(E,{title:n.title,authors:n.authors,description:n.description,link:n.canonicalVolumeLink,img:n.imageLinks,path:e.path,key:t.id})})):"/saved"===e.path?e.savedBooks.length>0?o.a.createElement("div",{id:"resultsContainer"},o.a.createElement("h3",null,"Saved Books"),e.savedBooks.map(function(t){return o.a.createElement(E,{title:t.title,authors:t.authors,description:t.description,link:t.link,img:t.img,id:t._id,path:e.path,key:t._id})})):o.a.createElement("div",{id:"resultsContainer"},o.a.createElement("h3",null,"Saved Books"),o.a.createElement("p",null,"No saved books.")):void 0},C=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={bookInput:"",bookData:[]},n.handleSearchClick=n.handleSearchClick.bind(Object(m.a)(Object(m.a)(n))),n.handleFormChange=n.handleFormChange.bind(Object(m.a)(Object(m.a)(n))),n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"handleFormChange",value:function(e){e.preventDefault(),this.setState({bookInput:e.target.value})}},{key:"handleSearchClick",value:function(e){var t=this;e.preventDefault(),b.searchBooks(this.state.bookInput).then(function(e){t.setState({bookData:e.data}),t.setState({bookInput:""})})}},{key:"render",value:function(){return o.a.createElement("main",null,o.a.createElement(f,{handleFormChange:this.handleFormChange,handleSearchClick:this.handleSearchClick}),this.state.bookData.length>0?o.a.createElement(g,{bookData:this.state.bookData,path:this.props.match.path}):null)}}]),t}(o.a.Component),j=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={savedBooks:[]},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){var e=this;b.getBooks().then(function(t){e.setState({savedBooks:t.data})}).catch(function(e){console.log("Saved Books error",e)})}},{key:"render",value:function(){return o.a.createElement("main",null,o.a.createElement(g,{saveBooks:this.state.savedBooks,path:this.props.match.path}))}}]),t}(o.a.Component);var S=function(){return o.a.createElement("nav",null,o.a.createElement("h2",null,"Google Books"),o.a.createElement(d.b,{to:"/"},"Search"),o.a.createElement(d.b,{to:"/saved"},"Saved"))};var O=function(){return o.a.createElement("header",null,o.a.createElement("h1",null,"React Book Search"),o.a.createElement("p",null,"Search and save your favorite books."))},w=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement(d.a,null,o.a.createElement("div",null,o.a.createElement(S,null),o.a.createElement(O,null),o.a.createElement(p.c,null,o.a.createElement(p.a,{exact:!0,path:"/",component:C}),o.a.createElement(p.a,{path:"/saved",component:j}))))}}]),t}(a.Component),B=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(o.a.createElement(w,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");B?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):y(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):y(e)})}}()}},[[32,1,2]]]);
//# sourceMappingURL=main.28014630.chunk.js.map