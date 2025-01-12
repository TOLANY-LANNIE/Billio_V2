import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { GlobalInterceptor } from './http.interceptors';
import { AppRoutingModule } from './app.routes';

import { LoginComponent } from './auth/login/login.component';

import { CheckboxModule } from 'primeng/checkbox';
import {StyleClassModule} from 'primeng/styleclass';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
@NgModule({
    declarations:[
        AppComponent,
        LoginComponent
    ],
    imports:[
        BrowserModule,
        AppRoutingModule,
        RouterModule,
        HttpClientModule,
        BrowserAnimationsModule,

        CheckboxModule,
        StyleClassModule,
        ButtonModule,
        InputTextModule,
        RippleModule
        
    ],
    providers:[
        {
            provide: HTTP_INTERCEPTORS,
            useClass: GlobalInterceptor,
            multi: true,
        },
    ],
    bootstrap:[AppComponent]
    
})
export class AppModule { }


