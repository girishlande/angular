1. Its important to add ngModel in form control, otherwise you will get unndefined when you try to access
their value in typescript using form.value.name, form.value.side etc

2. its important that you add form with following tag
<form #form="ngForm" (ngSubmit)="onSubmit(form)">

3. this.name this.side this.sw etc. while using members in typescript class always remember to use this. 

4. you have to touch some html files sometimes in order to refresh their content 