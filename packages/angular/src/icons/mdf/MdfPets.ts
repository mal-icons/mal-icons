import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-pets",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfPets {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["circle",{"cx":"4.5","cy":"9.5","r":"2.5"}],["circle",{"cx":"9","cy":"5.5","r":"2.5"}],["circle",{"cx":"15","cy":"5.5","r":"2.5"}],["circle",{"cx":"19.5","cy":"9.5","r":"2.5"}],["path",{"d":"M17.34 14.86c-0.87-1.02-1.6-1.89-2.48-2.91-0.46-0.54-1.05-1.08-1.75-1.32-0.11-0.04-0.22-0.07-0.33-0.09-0.25-0.04-0.52-0.04-0.78-0.04s-0.53 0-0.790.05c-0.110.02-0.220.05-0.330.09-0.70.24-1.280.78-1.75 1.32-0.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.790.29 1.02 1.02 2.03 2.33 2.320.730.15 3.06-0.44 5.54-0.44h0.18c2.48 0 4.810.58 5.540.44 1.31-0.29 2.04-1.31 2.33-2.320.31-2.04-1.3-3.49-2.61-4.8z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfPets;
