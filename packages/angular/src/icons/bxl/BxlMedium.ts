import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxl-medium",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxlMedium {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4.29 7.27a0.730.73 0 0 0-0.24-0.62l-1.77-2.13v-0.32h5.5l4.25 9.32 3.74-9.32H21v0.32l-1.51 1.45a0.450.45 0 0 0-0.170.43v10.67a0.450.45 0 0 0 0.170.43l1.48 1.45v0.32h-7.44v-0.32l1.53-1.49c0.15-0.150.15-0.190.15-0.42V8.4L10.95 19.22h-0.57L5.42 8.4v7.25c-0.040.310.060.610.280.83L7.68 18.9v0.32H2.04V18.9l1.99-2.42a0.970.97 0 0 0 0.26-0.83V7.27z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxlMedium;
