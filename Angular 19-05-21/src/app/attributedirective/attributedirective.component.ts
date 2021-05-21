import { Component } from '@angular/core';

@Component({
    selector: 'app-attributedirective',
    template: `<button class='colorClass' [ngClass]='applyClasses()'>Pavan kumar</button>`,    
    styles: [`.boldClass{    
                font-weight:bold;    
                  font-size : 30px;    
            }    
    
            .italicsClass{    
                font-style:italic;    
            }    
    
            .colorClass{    
                color:blue;               
 }`]    

})
 
export class AttributedirectiveComponet{
    applyBoldClass: boolean = true;    
    applyItalicsClass: boolean = true;    
    
    applyClasses() {    
        let classes = {    
            boldClass: this.applyBoldClass,    
            italicsClass: this.applyItalicsClass    
        };    
    
        return classes; 

    }
}
