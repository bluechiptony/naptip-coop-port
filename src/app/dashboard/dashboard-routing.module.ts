import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../overview/overview.module').then((m) => m.OverviewModule),
      },
      {
        path: 'overview',
        loadChildren: () =>
          import('../overview/overview.module').then((m) => m.OverviewModule),
      },
      {
        path: 'zonal-commands',
        loadChildren: () =>
          import('../zonal-commands/zonal-commands.module').then(
            (m) => m.ZonalCommandsModule
          ),
      },
      {
        path: 'departments',
        loadChildren: () =>
          import('../departments/departments.module').then(
            (m) => m.DepartmentsModule
          ),
      },
      {
        path: 'memos',
        loadChildren: () =>
          import('../memo/memo.module').then((m) => m.MemoModule),
      },
      {
        path: 'promotions',
        loadChildren: () =>
          import('../promotion/promotion.module').then(
            (m) => m.PromotionModule
          ),
      },
      {
        path: 'training',
        loadChildren: () =>
          import('../training/training.module').then((m) => m.TrainingModule),
      },
      {
        path: 'postings',
        loadChildren: () =>
          import('../posting/posting.module').then((m) => m.PostingModule),
      },
      {
        path: 'leaves',
        loadChildren: () =>
          import('../leave/leave.module').then((m) => m.LeaveModule),
      },
      {
        path: 'staff',
        loadChildren: () =>
          import('../staff/staff.module').then((m) => m.StaffModule),
      },
    ],
  },
  { path: 'users', loadChildren: () => import('../user/user.module').then(m => m.UserModule) },
  { path: 'activity', loadChildren: () => import('../activity/activity.module').then(m => m.ActivityModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
