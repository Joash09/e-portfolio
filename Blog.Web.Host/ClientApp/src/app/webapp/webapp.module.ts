import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent/parent.component';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

/* Applications in the form of Components */
import { ProofOfWorkComponent } from './proof-of-work/proof-of-work.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NeuralNetComponent } from './neural-net/neural-net.component';
import { DrawDirective } from './neural-net/draw.directive';
import { DoublePendulumComponent } from './double-pendulum/double-pendulum.component';
import { TuringMachineComponent } from './turing-machine/turing-machine.component';

/* 3rd Party */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [ParentComponent, ProofOfWorkComponent, WelcomeComponent, NeuralNetComponent, DrawDirective, DoublePendulumComponent, TuringMachineComponent],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    RouterModule.forChild([
      { 
        path: 'webapps', component: ParentComponent,
        children: [
          { path: '', component: WelcomeComponent },
          { path: 'proof-of-work', component: ProofOfWorkComponent},
          { path: 'neural-net', component: NeuralNetComponent},
          { path: 'double-pendulum', component: DoublePendulumComponent },
          { path: 'turing-machine', component: TuringMachineComponent }
        ]
      },
    ])
  ]
})
export class WebappModule { }
