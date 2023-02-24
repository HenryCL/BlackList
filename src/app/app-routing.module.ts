import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PhotosComponent } from './components/photos/photos.component';

const routes: Routes = [
  {path: 'about', component: AppComponent},
  {path: 'photos', component: PhotosComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
