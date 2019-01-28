import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NxModule } from '@nrwl/nx';
import { LibsMaterialModule } from '@workshop/libs/material';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { ProjectsModule } from './projects/projects.module';
import { CustomersModule } from './customers/customers.module';
import { AppRoutingModule } from './app-routing.module';
import { LibsUiLoginModule } from '@workshop/libs/ui-login';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    BrowserAnimationsModule,
    LibsMaterialModule,
    HomeModule,
    AppRoutingModule,
    ProjectsModule,
    CustomersModule,
    LibsUiLoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
