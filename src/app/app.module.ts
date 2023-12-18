import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { PlayerComponent } from './player/player.component';
import { GameComponent } from './game/game.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button"
import {MatIconModule} from "@angular/material/icon";
import {MatDialogModule, MatDialog} from '@angular/material/dialog';
import { DialogAddPlayerComponent } from './dialog-add-player/dialog-add-player.component'

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    PlayerComponent,
    StartScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatDialogModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
