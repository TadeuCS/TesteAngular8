import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CarrosComponent } from './modules/carros/pages/lista/carros.component';
import { NovoComponent } from './modules/carros/pages/novo/novo.component';
import { CarrosService } from './modules/carros/services/carros.service';
import { ErrosComponent } from './modules/errors/erros.component';
import { HomeComponent } from './modules/home/home.component';
import { LoginComponent } from './modules/login/login.component';
import { AuthGuard } from './security/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'carros', component: CarrosComponent, canActivate: [AuthGuard] },
  { path: 'carros/novo', component: NovoComponent, canActivate: [AuthGuard] },
  { path: '**', component: ErrosComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrosComponent,
    HomeComponent,
    CarrosComponent,
    NovoComponent
  ],
  exports: [
    RouterModule,
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CarrosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
