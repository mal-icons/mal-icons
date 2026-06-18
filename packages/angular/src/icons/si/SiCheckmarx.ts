import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-checkmarx",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiCheckmarx {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6.540.12A6.55 6.55 0 0 0 0 6.66v10.67a6.55 6.55 0 0 0 6.54 6.54h10.91A6.55 6.55 0 0 0 24 17.34v-0.83a2.19 2.19 0 0 0-4.39 0v0.83c0 1.19-0.97 2.16-2.16 2.16H6.54a2.16 2.16 0 0 1-2.16-2.16V6.75c0-1.190.97-2.16 2.16-2.16 3.840 7.81-0.01 11.6100.560.140.890.45 1.060.850.190.470.34 1.12-0.4 1.75l-6.26 4.6-1.89-2.44a2.19 2.19 0 0 0-3.07-0.39 2.19 2.19 0 0 0-0.39 3.08l3.2 4.13a2.2 2.2 0 0 0 3.040.42l7.25-5.3a56.68 56.68 0 0 0 1.22-0.98c2.11-1.93 2.52-4.39 1.63-6.55C22.6 1.51 20.270.12 17.430.12Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiCheckmarx;
