import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

/* Applications in the form of Components */
import { ParentComponent } from './parent/parent.component';
import { ProofOfWorkComponent } from './proof-of-work/proof-of-work.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NeuralNetComponent } from './neural-net/neural-net.component';
import { DrawDirective } from './neural-net/draw.directive';
import { DoublePendulumComponent } from './double-pendulum/double-pendulum.component';
import { TuringMachineComponent } from './turing-machine/turing-machine.component';
import { JispyComponent } from './jispy/jispy.component';

const routes: Routes = [{
    path: 'webapps', component: ParentComponent, children: [
      { path: '', component: WelcomeComponent },
      { path: 'jispy', component: JispyComponent },
      { path: 'proof-of-work', component: ProofOfWorkComponent},
      { path: 'neural-net', component: NeuralNetComponent},
      { path: 'double-pendulum', component: DoublePendulumComponent },
      { path: 'turing-machine', component: TuringMachineComponent }]
  }];

@NgModule({
  declarations: [
    ParentComponent,
    ProofOfWorkComponent,
    WelcomeComponent,
    NeuralNetComponent,
    DrawDirective,
    DoublePendulumComponent,
    TuringMachineComponent,
    JispyComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    RouterModule.forChild(routes)
  ],
})
export class WebappModule { }
