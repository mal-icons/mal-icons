import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-manage-accounts",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtManageAccounts {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["circle",{"cx":"10","cy":"8","r":"2","opacity":".3"}],["path",{"d":"M10 16c0-0.340.03-0.670.08-0.99-0.03-0.01-0.05-0.01-0.08-0.01-1.97 0-3.90.53-5.59 1.54-0.250.14-0.410.46-0.410.81V18h6.29c-0.19-0.63-0.29-1.3-0.29-2z","opacity":".3"}],["path",{"d":"M4 18v-0.65c0-0.340.16-0.660.41-0.81C6.1 15.53 8.03 15 10 15c0.03 0 0.05 0 0.080.010.1-0.70.3-1.370.59-1.98-0.22-0.02-0.44-0.03-0.67-0.03-2.42 0-4.680.67-6.61 1.82-0.880.52-1.39 1.5-1.39 2.53V20h9.26c-0.42-0.6-0.75-1.28-0.97-2H4zm6-6c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 0.9 2 2s-0.9 2-2 2-2-0.9-2-2 0.9-2 2-2zm10.83 6.63-1.450.49c-0.32-0.27-0.68-0.48-1.08-0.63L18 11h-2l-0.3 1.49c-0.40.15-0.760.36-1.080.63l-1.45-0.49-1 1.73 1.14 1c-0.030.21-0.060.41-0.060.63s0.030.420.060.63l-1.14 1 1 1.73 1.45-0.49c0.320.270.680.48 1.080.63L16 21h2l0.3-1.49c0.4-0.150.76-0.36 1.08-0.63l1.450.49 1-1.73-1.14-1c0.03-0.210.06-0.410.06-0.63s-0.03-0.42-0.06-0.63l1.14-1-1-1.75zM17 18c-1.1 0-2-0.9-2-2s0.9-2 2-2 2 0.9 2 2-0.9 2-2 2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtManageAccounts;
