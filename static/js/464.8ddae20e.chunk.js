"use strict";(self.webpackChunkproject_management_app=self.webpackChunkproject_management_app||[]).push([[464],{2517:function(A,e,s){s.r(e),s.d(e,{default:function(){return mA}});var t=s(1413),a=s(2791),n="BoardPage_container__RnD4n",r="BoardPage_title__dDsFF",i="BoardPage_board__K6UPE",l="BoardPage_board__body__ij2Hx",o="BoardPage_loader__cV3v6",d=s(2229),c=s(4747),u=s(9439),m=s(5705),g=s(8805),C=s(3168),h=s(3042),I=s(338),f=s(4942),B={modal:"TaskModal_modal__9M3i1",open:"TaskModal_open__L7GQz",modal__content:"TaskModal_modal__content__gB5ky",cross:"TaskModal_cross__eXAPN",error:"TaskModal_error__WlnIl",sub_btn:"TaskModal_sub_btn__6rD7e",loader:"TaskModal_loader__NJvT-"},x=s(1694),E=s.n(x),p=s(456),v=s(711),j=s(8325),Q=s(184),b=function(A){var e=A.isOpenCreateTaskModal,s=A.setIsOpenCreateTaskModal,t=A.boardId,a=A.columnId,n=(0,d.T)(),r=(0,d.C)((function(A){return A.tasks})),i=r.tasks,l=r.isLoading,o=(0,p.Z)(localStorage.getItem("token")||"").userId,c=(0,C.$)().t;return(0,Q.jsx)("div",{className:E()(B.modal,(0,f.Z)({},B.open,e)),onClick:function(){return s(!1)},children:(0,Q.jsxs)("div",{className:B.modal__content,onClick:function(A){return A.stopPropagation()},children:[(0,Q.jsx)("img",{className:B.cross,src:v.Z,alt:"cross",onClick:function(){return s(!1)}}),(0,Q.jsx)(m.J9,{initialValues:{title:"",description:""},onSubmit:function(A,e){var s=A.title,r=A.description,l=e.resetForm;n((0,h.gI)({boardId:t,columnId:a,values:{order:i[a].length+1,title:s,description:r,userId:o}})),l()},validationSchema:g.Ry().shape({title:g.Z_().min(4,c("must_be_more_than_4_characters")).max(12,c("must_be_less_than_12_characters")).required(c("title_is_required")),description:g.Z_().min(2,c("must_be_more_than_2_characters")).required(c("description_is_required"))}),children:function(A){var e=A.handleSubmit;return(0,Q.jsxs)(m.l0,{className:B.form,onSubmit:e,children:[(0,Q.jsxs)("label",{htmlFor:"title",children:[c("title_task"),(0,Q.jsx)(m.gN,{id:"title",name:"title"}),(0,Q.jsx)("div",{className:B.error,children:(0,Q.jsx)(m.Bc,{name:"title"})})]}),(0,Q.jsxs)("label",{htmlFor:"description",children:[c("description_task"),(0,Q.jsx)(m.gN,{id:"description",name:"description"}),(0,Q.jsx)("div",{className:B.error,children:(0,Q.jsx)(m.Bc,{name:"description"})})]}),(0,Q.jsxs)("div",{className:B.sub_btn,children:[(0,Q.jsx)("div",{className:B.loader,children:l&&(0,Q.jsx)(j.Z,{})}),(0,Q.jsx)("button",{type:"submit",disabled:l,children:c("create")})]})]})}})]})})},N="Task_task__tJKR9",k="Task_image-preview__41lty",T="Task_title__89Bov",J="Task_description__bwtYY",P="Task_taskHead__pTQIF",y="Task_hat__dOgNW",M="Task_refactor-delete__E1RNq",V="Task_delete__Ueyum",H="Task_refactor__Jeanb",R={modal:"TaskChangeModal_modal__-a68v",open:"TaskChangeModal_open__dBgmZ",modal__content:"TaskChangeModal_modal__content__5ip+0",cross:"TaskChangeModal_cross__lpiCo",error:"TaskChangeModal_error__EFIze",sub_btn:"TaskChangeModal_sub_btn__jW6R5",loader:"TaskChangeModal_loader__f-Qsi",text_area:"TaskChangeModal_text_area__6JeBU",image:"TaskChangeModal_image__jChG4",file:"TaskChangeModal_file__hWSp1"},q=s(3073),w=["image/jpeg","image/jpg","image/png"],z=s.p+"static/media/upload.b969462c9de9339de168.png",D=function(A){var e,s,t=A.task,a=A.isOpenChangeTaskModal,n=A.setIsOpenChangeTaskModal,r=A.numberTask,i=(0,d.T)(),l=(0,d.C)((function(A){return A.tasks})),o=l.isLoading,c=l.urlImages,u=(0,C.$)().t,I=!(null===(e=t.files)||void 0===e||!e.length)||!1,B=null===(s=c.find((function(A){return A.taskId===t.id})))||void 0===s?void 0:s.urlImage;return(0,Q.jsx)("div",{className:E()(R.modal,(0,f.Z)({},R.open,a)),onClick:function(){return n(!1)},children:(0,Q.jsxs)("div",{className:R.modal__content,onClick:function(A){return A.stopPropagation()},children:[(0,Q.jsx)("img",{className:R.cross,src:v.Z,alt:"cross",onClick:function(){return n(!1)}}),(0,Q.jsx)("h2",{children:"".concat(u("task_number")," ").concat(r)}),(0,Q.jsx)(m.J9,{initialValues:{title:t.title,description:t.description,file:""},onSubmit:function(A){var e=A.title,s=A.description,a=A.file;i((0,h.xJ)({boardId:t.boardId,columnId:t.columnId,taskId:t.id,data:{title:e,order:t.order,description:s,userId:t.userId,boardId:t.boardId,columnId:t.columnId}})),a&&!I&&i((0,q.W)({taskId:t.id,file:a}))},validationSchema:g.Ry().shape({title:g.Z_().min(4,u("must_be_more_than_4_characters")).max(12,u("must_be_less_than_12_characters")).required(u("title_is_required")),description:g.Z_().min(2,u("must_be_more_than_2_characters")).required(u("description_is_required")),file:g.nK().test("fileSize",u("error-image_size"),(function(A){return!!I||("object"!==typeof A||(null===A||void 0===A?void 0:A.size)<=5e5)})).test("type",u("error-image_type"),(function(A){return!!I||("object"!==typeof A||w.includes(null===A||void 0===A?void 0:A.type))}))}),children:function(A){var e=A.handleSubmit,s=A.setFieldValue,t=A.values;return(0,Q.jsxs)(m.l0,{className:R.form,onSubmit:e,children:[(0,Q.jsxs)("label",{htmlFor:"title",children:[u("title_task"),(0,Q.jsx)(m.gN,{id:"title",name:"title"}),(0,Q.jsx)("div",{className:R.error,children:(0,Q.jsx)(m.Bc,{name:"title"})})]}),(0,Q.jsxs)("label",{htmlFor:"description",children:[u("description_task"),(0,Q.jsx)(m.gN,{as:"textarea",id:"description",name:"description",className:R.text_area}),(0,Q.jsx)("div",{className:R.error,children:(0,Q.jsx)(m.Bc,{name:"description"})})]}),!I&&(0,Q.jsxs)("label",{className:R.file,htmlFor:"file",children:[(0,Q.jsx)("div",{children:u("choose_image")}),(0,Q.jsx)("img",{width:50,src:z,alt:"upload"}),(0,Q.jsx)("input",{id:"file",type:"file",name:"file",onChange:function(A){var e=A.target.files[0];s("file",e)}}),t.file&&(0,Q.jsx)("p",{children:t.file.name}),(0,Q.jsx)("div",{className:R.error,children:(0,Q.jsx)(m.Bc,{name:"file"})})]}),B&&(0,Q.jsx)("div",{className:R.image,children:(0,Q.jsx)("img",{src:B,alt:"image of task"})}),(0,Q.jsxs)("div",{className:R.sub_btn,children:[(0,Q.jsx)("div",{className:R.loader,children:o&&(0,Q.jsx)(j.Z,{})}),(0,Q.jsx)("button",{type:"submit",disabled:o,children:u("update")})]})]})}})]})})},L=s.p+"static/media/pencil.bd176f6ff8952730f89b.png",X="data:image/png;base64,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",K=s(1725),O=s(1105),Z=a.memo((function(A){var e,s,n=A.task,r=A.index,i=(0,d.T)(),l=n.title,o=n.description,c=n.boardId,m=n.columnId,g=n.id,C=(0,d.C)((function(A){return A.tasks})),h=C.tasks,f=C.isUpdateTask,B=C.urlImages,x=h[m],E=(null===(e=B.find((function(A){return A.taskId===n.id})))||void 0===e?void 0:e.urlImage)||"data:image/jpeg;base64,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",p=(0,a.useState)(!1),v=(0,u.Z)(p,2),j=v[0],b=v[1],R=(0,a.useState)(!1),w=(0,u.Z)(R,2),z=w[0],Z=w[1],U=!(null===(s=n.files)||void 0===s||!s.length)||!1;return(0,a.useEffect)((function(){Z(!1)}),[f]),(0,a.useEffect)((function(){U&&i((0,q.N)({taskId:n.id,fileName:n.files[0].filename}))}),[U]),(0,Q.jsx)(K._l,{draggableId:n.id,index:r,children:function(A){return(0,Q.jsxs)("div",(0,t.Z)((0,t.Z)({className:N},A.draggableProps),{},{ref:A.innerRef,children:[(0,Q.jsxs)("div",(0,t.Z)((0,t.Z)({className:P},A.dragHandleProps),{},{children:[(0,Q.jsxs)("div",{className:y,children:[(0,Q.jsx)("h3",{className:T,children:"".concat(r+1,") ").concat(l)}),(0,Q.jsxs)("div",{className:M,children:[(0,Q.jsx)("div",{className:H,title:(0,O.t)("edit"),onClick:function(){return Z(!0)},children:(0,Q.jsx)("img",{width:26,src:L,alt:"refactor icon"})}),(0,Q.jsx)("div",{className:V,title:(0,O.t)("delete"),onClick:function(){return b(!0)},children:(0,Q.jsx)("img",{width:30,src:X,alt:"delete icon"})})]})]}),(0,Q.jsx)("div",{className:k,children:(0,Q.jsx)("img",{src:E,alt:"default preview"})}),(0,Q.jsx)(I.Z,{isOpenModal:j,setIsOpenModal:b,action:"delete_task",data:{boardId:c,columnId:m,taskId:g,tasks:x}})]})),(0,Q.jsx)("p",{className:J,children:o}),(0,Q.jsx)(D,{task:n,isOpenChangeTaskModal:z,setIsOpenChangeTaskModal:Z,numberTask:r+1})]}))}})})),U="Column_column__hjV8t",W="Column_loader__JWNqp",S="Column_columnHead__0ZN0M",G="Column_titleColumnBlock__DoypG",F="Column_title__ZMhog",_="Column_tasks__jurDu",Y="Column_delete__zB+9R",$="Column_buttonCreate__dtU4Q",AA="Column_title_form__sHO-U",eA="Column_input__SFbLb",sA="Column_error__a-u9J",tA="Column_buttons__q988z",aA="Column_buttonCancel__j7ePi",nA="Column_buttonSubmit__AuqyI",rA=s(9799),iA=a.memo((function(A){var e=A.column,s=A.index,n=e.title,r=e.id,i=void 0===r?"":r,l=e.order,o=(0,d.T)(),f=(0,d.C)((function(A){return A.columns})),B=f.boardId,x=f.isLoading,E=f.columns,p=(0,d.C)((function(A){return A.tasks})),v=p.tasks,N=p.isLoading,k=p.isCreateTask,T=p.successUpload,J=(0,C.$)().t,P=(0,a.useState)(!1),y=(0,u.Z)(P,2),M=y[0],V=y[1],H=(0,a.useState)(!1),R=(0,u.Z)(H,2),q=R[0],w=R[1],z=(0,a.useState)(!1),D=(0,u.Z)(z,2),L=D[0],O=D[1];return(0,a.useEffect)((function(){o((0,h.Ak)({boardId:B,columnId:i}))}),[i,T]),(0,a.useEffect)((function(){w(!1)}),[k]),(0,Q.jsx)(K._l,{draggableId:e.id,index:s,children:function(A){return(0,Q.jsxs)("div",(0,t.Z)((0,t.Z)({className:U},A.draggableProps),{},{ref:A.innerRef,children:[N&&(0,Q.jsx)("div",{className:W,children:(0,Q.jsx)(j.Z,{})}),(0,Q.jsxs)("div",(0,t.Z)((0,t.Z)({className:S},A.dragHandleProps),{},{children:[L?(0,Q.jsx)(m.J9,{initialValues:{title:n},onSubmit:function(A,e){var s=A.title,t=e.resetForm;o((0,c.Gw)({boardId:B,columnId:i,data:{order:l,title:s}})),t(),O(!1)},validationSchema:g.Ry().shape({title:g.Z_().min(3,J("must_be_more_than_3_characters")).max(12,J("must_be_less_than_12_characters")).required(J("title_is_required"))}),children:function(A){var e=A.handleSubmit,s=A.handleBlur,t=A.isValid;return(0,Q.jsxs)(m.l0,{className:AA,onSubmit:e,onBlur:function(A){s(A),t&&setTimeout((function(){O(!1)}),100)},children:[(0,Q.jsxs)("div",{className:tA,children:[(0,Q.jsx)("button",{className:nA,type:"submit",title:J("save"),children:(0,Q.jsx)("img",{src:"data:image/png;base64,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",alt:"submit button"})}),(0,Q.jsx)("button",{type:"button",title:J("cancel"),className:aA,onClick:function(A){A.preventDefault(),O(!1)},children:(0,Q.jsx)("img",{src:"data:image/png;base64,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",alt:"cancel button"})})]}),(0,Q.jsxs)("label",{htmlFor:"title",children:[J("title_column"),(0,Q.jsx)(m.gN,{id:"title",name:"title",className:eA,autoFocus:!0}),(0,Q.jsx)("div",{className:sA,children:(0,Q.jsx)(m.Bc,{name:"title"})})]}),x&&(0,Q.jsx)("div",{className:W,children:(0,Q.jsx)(j.Z,{})})]})}}):(0,Q.jsxs)("div",{className:G,children:[(0,Q.jsx)("h1",{className:F,title:J("click_to_change"),onClick:function(){return O(!0)},children:n}),(0,Q.jsx)("div",{className:Y,title:J("delete"),onClick:function(){return V(!0)},children:(0,Q.jsx)("img",{src:X,alt:"delete icon"})})]}),(0,Q.jsx)(I.Z,{isOpenModal:M,setIsOpenModal:V,data:{columns:E,columnId:i,boardId:B},action:"delete_column"})]})),(0,Q.jsx)(K.bK,{droppableId:e.id,children:function(A){return(0,Q.jsxs)("div",(0,t.Z)((0,t.Z)({className:_},A.droppableProps),{},{ref:A.innerRef,children:[v[i]&&v[i].map((function(A,e){return(0,Q.jsx)(Z,{task:A,index:e},A.id)})),A.placeholder]}))}}),(0,Q.jsxs)("button",{className:$,onClick:function(){return w(!0)},children:[(0,Q.jsx)("img",{width:26,src:rA,alt:"plus"}),J("create_task")]}),(0,Q.jsx)(b,{isOpenCreateTaskModal:q,setIsOpenCreateTaskModal:w,boardId:B,columnId:i})]}))}})})),lA=s(8917),oA=(s(5462),s(4939)),dA=s(9325),cA=s(1517),uA=s(6438),mA=a.memo((function(){var A=(0,d.T)(),e=(0,d.C)((function(A){return A.auth})).token,s=(0,d.C)((function(A){return A.boards})).boards,u=(0,d.C)((function(A){return A.columns})),m=u.isLoading,g=u.columns,I=u.boardId,f=u.errorColumn,B=u.isCreateColumn,x=s.find((function(A){return A.id===I})),E=(0,d.C)((function(A){return A.tasks})),p=E.isCreateTask,v=E.isUpdateTask,b=E.errorTask,N=E.tasks,k=(0,C.$)().t;(0,a.useEffect)((function(){s.length||A((0,uA.DC)(e))}),[s.length]),(0,a.useEffect)((function(){A((0,c.Pu)(I))}),[I]),(0,a.useEffect)((function(){b&&oA.Am.error(b,{position:"top-center",autoClose:3e3,hideProgressBar:!0})}),[b]);return(0,a.useEffect)((function(){B&&(oA.Am.success(k("new_column_created"),{position:"top-center",autoClose:3e3,hideProgressBar:!0}),A((0,dA.cJ)())),p&&(oA.Am.success(k("new_task_created"),{position:"top-center",autoClose:3e3,hideProgressBar:!0}),A((0,cA.wI)())),v&&(oA.Am.success(k("update_task"),{position:"top-center",autoClose:3e3,hideProgressBar:!0}),A((0,cA.xe)())),"Unauthorized"!==f&&""!==f&&oA.Am.error(f,{position:"top-center",autoClose:3e3,hideProgressBar:!0}),"Unauthorized"!==b&&""!==b&&oA.Am.error(b,{position:"top-center",autoClose:3e3,hideProgressBar:!0})}),[f,b,B,p,v]),(0,Q.jsxs)("div",{className:n,children:[(0,Q.jsx)(lA.Z,{}),(0,Q.jsx)(oA.Ix,{}),(0,Q.jsx)("h1",{className:r,children:null===x||void 0===x?void 0:x.title}),(0,Q.jsxs)("div",{className:i,children:[m&&(0,Q.jsx)("div",{className:o,children:(0,Q.jsx)(j.Z,{})}),(0,Q.jsx)(K.Z5,{onDragEnd:function(e){var s=e.source,t=e.destination,a=e.type;if(t){var n=s.index,r=t.index;if("column"!==a)if(s.droppableId!==t.droppableId){var i=N[s.droppableId],l=N[t.droppableId],o=t.droppableId;A((0,h.ak)({boardId:I,sourceColumn:i,destinationColumn:l,startIndex:n,endIndex:r,destinationColumnId:o}))}else{if(n===r)return;var d=N[s.droppableId],u=s.droppableId;A((0,h.vz)({boardId:I,columnId:u,startIndex:n,endIndex:r,tasksOfColumn:d}))}else{if(n===r)return;A((0,c.fp)({boardId:I,startIndex:n,endIndex:r,columns:g}))}}},children:(0,Q.jsx)(K.bK,{droppableId:"all-droppable",direction:"horizontal",type:"column",children:function(A){return(0,Q.jsxs)("div",(0,t.Z)((0,t.Z)({className:l},A.droppableProps),{},{ref:A.innerRef,children:[g.length?null===g||void 0===g?void 0:g.map((function(A,e){return(0,Q.jsx)(iA,{column:A,index:e},A.id)})):(0,Q.jsx)("h4",{children:k("columns_not_found")}),A.placeholder]}))}})})]})]})}))}}]);
//# sourceMappingURL=464.8ddae20e.chunk.js.map