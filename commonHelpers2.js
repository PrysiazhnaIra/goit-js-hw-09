import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const a=document.querySelector(".feedback-form"),r=a.elements.email,m=a.elements.message;let e={email:"",message:"",reset(){this.email="",this.message=""}};const l="feedback-form-state",s=localStorage.getItem(l);s&&(e=JSON.parse(s),r.value=e.email,m.value=e.message);a.addEventListener("input",t=>{t.target==t.currentTarget.elements.email?e.email=t.target.value.trim():e.message=t.target.value.trim(),localStorage.setItem(l,JSON.stringify(e))});a.addEventListener("submit",t=>{t.preventDefault(),!e.email||!e.message?alert("Fill please all fields"):(console.log(e),localStorage.removeItem(l),a.reset(),e.reset())});
//# sourceMappingURL=commonHelpers2.js.map