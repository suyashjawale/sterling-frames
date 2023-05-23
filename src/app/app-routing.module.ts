import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { HomePageDataComponent } from './components/home-page-data/home-page-data.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CategoryComponent } from './components/category/category.component';

const routes: Routes = [
	{
		path: '', component: HomeComponent,
		children: [
			{
				path:'',
				component:HomePageDataComponent,
				pathMatch:'full'
			},
			{
				path: 'category',
				children:[
					{
						path:'',
						redirectTo:'god',
						pathMatch:'full'
					},
					{
						path: 'god',
						data:{categoryName:'god'},
						component: CategoryComponent
					},
					{
						path: 'nature',
						data:{categoryName:'nature'},
						component: CategoryComponent
					},
					{
						path: 'idols',
						data:{categoryName:'idols'},
						component: CategoryComponent
					},
					{
						path: 'modernart',
						data:{categoryName:'modernart'},
						component: CategoryComponent
					},
					{
						path: '**', 
						component: PageNotFoundComponent
					}
				]
			}
		]
	},
	{ path: 'profile', component: ProfileComponent,pathMatch:'full' },
	{ path: 'mycart', component: CartComponent,pathMatch:'full' },
	{ path: 'wishlist', component: WishlistComponent,pathMatch:'full' },
	// { path: 'frames/:productName', component: ProductsComponent,pathMatch:'full'},
	{path: '**', component: PageNotFoundComponent,pathMatch:'full'}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
