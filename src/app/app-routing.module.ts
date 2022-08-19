import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WebappModule } from './webapp/webapp.module';

// Components
import { HomeComponent } from './home/home.component';
import { BlogViewComponent } from './blog-view/blog-view.component';

const routes: Routes = [
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'blog-view/:id', component: BlogViewComponent },
      { path: 'webapps', loadChildren: () => import('./webapp/webapp.module').then(w => w.WebappModule)}
];

@NgModule({
  imports: [
    WebappModule,
    RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
