/*
 * © 2017 Stratio Big Data Inc., Sucursal en España.
 *
 * This software is licensed under the Apache License, Version 2.0.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the terms of the License for more details.
 *
 * SPDX-License-Identifier: Apache-2.0.
 */

import { Component } from '@angular/core';

@Component({
  selector: 'st-modal2-demo',
  templateUrl: './st-modal2-demo.component.html',
  styleUrls: ['./st-modal2-demo.component.scss']
})

export class StModal2DemoComponent {

  public modal1 = false;
  public modal2 = false;
  public modal3 = false;
  public configDoc: any = {
    html: 'demo/st-modal2-demo/st-modal2-demo.component.html',
    ts: 'demo/st-modal2-demo/st-modal2-demo.component.ts',
    component: 'lib/st-modal2/st-modal2.component.ts'
  };

}
