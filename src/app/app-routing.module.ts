import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'administration',
    loadChildren: () =>
      import('./admin-dashboard/admin-dashboard.module').then(
        (m) => m.AdminDashboardModule
      ),
  },
  {
    path: 'human-resources',
    loadChildren: () =>
      import('./hr-dashboard/hr-dashboard.module').then(
        (m) => m.HrDashboardModule
      ),
  },
  {
    path: 'operations',
    loadChildren: () =>
      import('./operations-dashboard/operations-dashboard.module').then(
        (m) => m.OperationsDashboardModule
      ),
  },
  {
    path: 'admin-home',
    loadChildren: () =>
      import('./admin-home/admin-home.module').then((m) => m.AdminHomeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
