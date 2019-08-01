import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'myday',
    pathMatch: 'full'
  },
  { path: 'myday', loadChildren: './myday/myday.module#MydayPageModule' },
  { path: 'important', loadChildren: './important/important.module#ImportantPageModule' },
  { path: 'planned', loadChildren: './planned/planned.module#PlannedPageModule' },
  { path: 'tasks', loadChildren: './tasks/tasks.module#TasksPageModule' },
  { path: 'myday/details', loadChildren: './myday/details/details.module#DetailsPageModule' },
  { path: 'calendar', loadChildren: './calendar/calendar.module#CalendarPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
