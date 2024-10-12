import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { GlobalInterceptor } from './http.interceptors';
import { AppRoutingModule } from './app.routes';

@NgModule({
    declarations:[
        AppComponent
    ],
    imports:[
        BrowserModule,
        AppRoutingModule,
        RouterModule,
        HttpClientModule,
        BrowserAnimationsModule,
        
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


