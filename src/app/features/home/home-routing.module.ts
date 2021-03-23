import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubscriptionsComponent } from '../subscriptions/subscriptions.component';
import { AuditLogComponent } from '../audit-log/audit-log.component';
import { WebhooksComponent } from '../webhooks/webhooks.component';
const routes: Routes = [
    {
        path: '',
        redirectTo:'webhooks',
        pathMatch:'full'
    },
    {
        path: 'webhooks',
        component: WebhooksComponent,
        data: {
            breadcrumb: 'Webhooks',
        },
        loadChildren: () => import('../webhooks/webhooks.module').then(m => m.WebhooksModule),
        
    },
    {
      path: 'subscriptions',
      component: SubscriptionsComponent,
      data: {
          breadcrumb: 'Subscriptions'
      },
  },
  {
      path: 'traffic',
      component: AuditLogComponent,
      data: {
          breadcrumb: 'Traffic'
      },
  }, 
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
