import{NgModule} from '@angular/core'
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { SidePanelComponent } from './side-panel/side-panel.component';
import { RouterModule } from '@angular/router';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { AppModule } from '../app.module';
@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidePanelComponent],
  imports: [
    CommonModule,
    RouterModule,
    DropdownModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
