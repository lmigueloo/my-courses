import { OrderSumaryComponent } from './order-sumary/order-sumary.component';
// import { OrderComponent } from './order/order.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
// import { AboutComponent } from './about/about.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';


export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'restaurants', component: RestaurantsComponent},
    {path: 'restaurants/:id', component: RestaurantDetailComponent,
        children: [
            {path: '', redirectTo: 'menu', pathMatch: 'full'},
            {path: 'menu', component: MenuComponent},
            {path: 'reviews', component: ReviewsComponent}
        ]},
    {path: 'order', loadChildren: 'order/order.module#OrderComponent'},
    {path: 'order-summary', component: OrderSumaryComponent},
    {path: 'about', loadChildren: 'about/about.module#AboutComponent'}
];