import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-padlet",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiPadlet {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.26 2.4c-0.280-0.570.18-0.690.45l-4.98 11.57h0l1.71 6.31c0.140.610.740.99 1.350.85l2.6-0.59-0.4-5.0100-5.27-1.55 5.270.75zm0 0 0.4 12.77 5.27-0.75-4.98-11.57h0c-0.12-0.27-0.41-0.45-0.69-0.45ZM0.44 7.53c-0.310-0.560.35-0.380.67l5.72 9.99-0.97-3.56a0.80.8 0 0 1 0.04-0.53l1.46-3.39L0.66 7.59a0.440.44 0 0 0-0.22-0.06Zm19.17 1.68-3.42 1.48 1.47 3.41h0a0.80.8 0 0 1 0.040.53l-0.92 3.4 5.62-8.81zm2.78 0-0.67 2.46 1.80.85c0.290.140.59-0.180.44-0.46h0zm-5.47 5.2-5.27 1.55-0.4 5.01 2.60.59c0.610.14 1.21-0.24 1.35-0.85z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiPadlet;
