import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes:Routes = [
    { path: '', redirectTo: '/restaurant/restaurant_id2', pathMatch: 'full' },
    { path: 'restaurant', loadChildren: './restaurant/restaurant.module#RestaurantModule' },
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
    { path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
    { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
    { path: '**', redirectTo: 'not-found' }
];

@NgModule ({
    imports: [RouterModule.forRoot(routes, { enableTracing: false })],
    exports: [RouterModule]
})
export class AppRoutingModule { }