import { Component } from '@angular/core';
import { PortfolioTemplate2Component } from '../../shared/portfolio-template2/portfolio-template2.component';
import { PortfolioTemplate1Component } from '../../shared/portfolio-template1/portfolio-template1.component';
import { TranslateModule } from '@ngx-translate/core';
@Component({
    selector: 'app-portfolio',
    standalone: true,
    templateUrl: './portfolio.component.html',
    styleUrl: './portfolio.component.scss',
    imports: [PortfolioTemplate2Component, PortfolioTemplate1Component, TranslateModule]
})
export class PortfolioComponent {
}
