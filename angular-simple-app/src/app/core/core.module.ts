import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ApiService, HeroService, FilmsService } from './services'

@NgModule({
    imports: [CommonModule],
    exports: [],
    declarations: [],
    providers: [ApiService, HeroService, FilmsService],
})
export class CoreModule {}
