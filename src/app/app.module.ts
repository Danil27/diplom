import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { HomeGuard } from './_guards/home.guard';
import { LoginService } from './login/login.service';
import { routing } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { ChecklistComponent } from './home/checklist/checklist.component';
import { TablesdbComponent } from './home/tablesdb/tablesdb.component';
import { TextAnalysisComponent } from './home/text-analysis/text-analysis.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ChecklistComponent,
    TablesdbComponent,
    TextAnalysisComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HomeGuard, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
