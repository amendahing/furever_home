import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewComponent } from './new/new.component';
import { AllComponent } from './all/all.component';
import { RandomComponent } from './random/random.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
    { path: '',component: NewComponent },
    { path: 'search_pet',component: NewComponent },
    { path: 'random_pet',component: RandomComponent },
    { path: 'all_pets/:pet_type/:zipcode',component: AllComponent },
    { path: 'pet_info/:id',component: InfoComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
