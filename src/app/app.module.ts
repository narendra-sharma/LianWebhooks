import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreadcrumbModule } from 'angular-crumbs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './core/layout/header/header.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { BreadcrumbsComponent } from './core/layout/breadcrumbs/breadcrumbs.component';
import { LogoComponent } from './core/layout/header/logo/logo.component';
import { MenuComponent } from './core/layout/header/menu/menu.component';
import { SearchComponent } from './core/layout/header/search/search.component';
import { LoginGetStartedComponent } from './core/layout/header/login-get-started/login-get-started.component';
import { CoreModule } from './core/core.module';
import { ModalModule,BsModalRef } from 'ngx-bootstrap/modal';  
import { HomeModule } from './features/home/home.module';
import { OrderTitleComponent } from './shared/common/order-title/order-title.component';
import { TitleComponent } from './shared/common/title/title.component';
import { OrderRateSubLinksComponent } from './shared/common/order-rate-sub-links/order-rate-sub-links.component';
import { SubTestDotButtonsComponent } from './shared/common/sub-test-dot-buttons/sub-test-dot-buttons.component';
import { RequestExampleComponent } from './shared/common/request-example/request-example.component';
import { ResponseComponent } from './shared/common/response/response.component';
import { WebhookCommonModule } from './shared/common/webhook-common.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    LogoComponent,
    MenuComponent,
    SearchComponent,
    LoginGetStartedComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CoreModule,
    AppRoutingModule,
    BreadcrumbModule,
    MatToolbarModule,
    ModalModule.forRoot(), 
    HomeModule,
    WebhookCommonModule
  ],
  
  providers: [BsModalRef],
  bootstrap: [AppComponent],
})
export class AppModule { }
