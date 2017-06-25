import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
// import { HomeComponent } from './home.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CodeOfConductComponent } from './code-of-conduct/code-of-conduct.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'home', component: HomeComponent },
  { path: 'coc', component: CodeOfConductComponent }
    // { path: '', pathMatch: 'full', redirectTo: 'home' },
    // { path: 'home', component: HomeComponent },
    // { path: '**', pathMatch: 'full', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { preloadingStrategy: PreloadAllModules }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
