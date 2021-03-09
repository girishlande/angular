In this project we create simple angular application with bootstrap and primeng, 
we can change style by simply referring to different styles present in 
node_modules\primeng\resources\themes

1. Create new project 
>ng new t1

2. install required modules
npm install primeng --save
npm install @angular/cdk --save
npm install chart.js --save
npm install quill --save

3. Add theme css in angular.json 
"styles": [
              
"src/styles.css",
              
"node_modules/primeng/resources/primeng.min.css",
              
"node_modules/primeng/resources/themes/nova-dark/theme.css"
            
],

4. Add modules for controls which you want to use in your application 
in app.module.ts

import { DataListModule } from 'primeng/primeng';

import { AccordionModule } from 'primeng/components/accordion/accordion';
import { PanelModule } from 'primeng/components/panel/panel';
import { ButtonModule } from 'primeng/components/button/button';
import { RadioButtonModule } from 'primeng/components/radioButton/radioButton';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';s
import { FormsModule } from '@angular/forms';


Update imports section 

imports: [
    
BrowserModule,
    
DataListModule,
    
AccordionModule,
    
PanelModule,
    
RadioButtonModule,
    
ButtonModule,
    
BrowserAnimationsModule,
    
FormsModule
  
],

5. Add HTML code

<p-accordion>
  <p-accordionTab header="Salads">
    Salads...
  </p-accordionTab>
  <p-accordionTab header="Pasta">
    Pasta...
  </p-accordionTab>
  <p-accordionTab header="Pizza" [selected]="true">
    <p-radioButton label="Double cheese ????"
                   name="pizza"
                   value="double-cheese"
                   [(ngModel)]="pizzaSelection">
    </p-radioButton><br>

    <p-radioButton label="Anchovy"
                   name="pizza"
                   value="anchovy"
                   [(ngModel)]="pizzaSelection">
    </p-radioButton><br>

    <p-radioButton label="Meat lover's ??"
                   name="pizza"
                   value="meat-lover"
                   [(ngModel)]="pizzaSelection">
    </p-radioButton>
  </p-accordionTab>
</p-accordion>

<br>

<p-panel header="Extras" *ngIf="pizzaSelection && pizzaSelection.length">
  ?? Would you like extra cheese on your pizza?
  <button pButton type="button" label="Ok, yeah!"></button>
</p-panel>



