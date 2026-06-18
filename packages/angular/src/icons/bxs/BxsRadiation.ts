import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxs-radiation",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxsRadiation {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9.91 8.53 7.12 3.88a0.50.5 0 0 0-0.7-0.17 9.98 9.98 0 0 0-4.4 7.60.510.51 0 0 0 0.50.53l5.420.09a4.04 4.04 0 0 1 1.97-3.4zm8.11-4.51a0.50.5 0 0 0-0.730.15L14.5 8.83a4.03 4.03 0 0 1 1.55 3.11l5.42-0.09a0.510.51 0 0 0 0.5-0.53 9.99 9.99 0 0 0-3.94-7.3zm-4.07 11.51a4.01 4.01 0 0 1-1.960.53 4.02 4.02 0 0 1-1.96-0.53l-2.64 4.76a0.50.5 0 0 0 0.210.69A9.95 9.95 0 0 0 11.99 22a9.94 9.94 0 0 0 4.4-1.020.50.5 0 0 0 0.21-0.69l-2.64-4.75z"}],["circle",{"cx":"12","cy":"12","r":"3"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxsRadiation;
