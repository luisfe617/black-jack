import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {UIRouterModule} from '@uirouter/angular';
import { FormsModule } from '@angular/forms';


import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {uiRouterConfigFn} from './config/router.config';
import {STATES} from './states/states';
import {LoginComponent} from './states/login/login.component';
import { GameComponent } from './states/game/game.component';
import { LogoComponent } from './commons/logo/logo.component';
import {Angular2FontawesomeModule} from 'angular2-fontawesome';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GameComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CoreModule,
    NgbModule.forRoot(),
    UIRouterModule.forRoot({
      states: STATES,
      useHash: false,
      config: uiRouterConfigFn
    }),
    Angular2FontawesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
