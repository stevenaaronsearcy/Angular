import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
//import the FormsModule:
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { SkillsComponent } from "./skills/skills.component";

import { SkillsService } from "./services/skills.service";
import { GreetingComponent } from "./greeting/greeting.component";

@NgModule({
  declarations: [AppComponent, SkillsComponent, GreetingComponent],
  //include the FormsModule within the imports array:
  imports: [BrowserModule, FormsModule],
  providers: [SkillsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
