import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FrontpageComponent} from "./frontpage/frontpage.component";
import {CvesComponent} from "./cves/cves.component";
import {CveComponent} from "./cve/cve.component";
import {NotFoundComponent} from "./not-found/not-found.component";

const routes: Routes = [
  { path: "", component: FrontpageComponent },
  { path: "cves", component: CvesComponent },
  { path: "cve/:id", component: CveComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
