import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent/parent.component';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

/* Applications in the form of Components */
import { ProofOfWorkComponent } from './proof-of-work/proof-of-work.component';
import { WelcomeComponent } from './welcome/welcome.component';

/* 3rd Party */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [ParentComponent, ProofOfWorkComponent, WelcomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    RouterModule.forChild([
      { 
        path: 'webapps', component: ParentComponent,
        children: [
          { path: '', component: WelcomeComponent },
          { path: 'proof-of-work', component: ProofOfWorkComponent}
        ]
      },
    ])
  ]
})
export class WebappModule { }
