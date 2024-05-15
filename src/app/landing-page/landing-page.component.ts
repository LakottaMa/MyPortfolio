import { Component } from '@angular/core';
import { HeaderComponent } from "../shared/header/header.component";
import { FooterComponent } from "../shared/footer/footer.component";
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { ProfilComponent } from "./profil/profil.component";
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-landing-page',
    standalone: true,
    templateUrl: './landing-page.component.html',
    styleUrl: './landing-page.component.scss',
    imports: [HeaderComponent, FooterComponent, CommonModule, PortfolioComponent, AboutMeComponent, SkillsComponent, PortfolioComponent, AboutMeComponent, SkillsComponent, ContactComponent, ProfilComponent, TranslateModule]
})
export class LandingPageComponent {
    constructor() {
    }
}
