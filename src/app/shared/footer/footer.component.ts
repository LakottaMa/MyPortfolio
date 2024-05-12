import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ServicesComponent } from '../services/services.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(private servicesComponent: ServicesComponent) { }

  scrollToTop(): void {
    this.servicesComponent.scrollToTop();
  }

  get isActiveLink(): string {
    return this.servicesComponent.isActiveLink
  }
}
