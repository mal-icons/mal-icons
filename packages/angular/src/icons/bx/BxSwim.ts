import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-swim",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxSwim {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["circle",{"cx":"19","cy":"6","r":"2"}],["path",{"d":"M18.88 13.22c-0.570.45-0.980.78-1.880.78-0.9 0-1.29-0.31-1.88-0.78-0.68-0.54-1.52-1.22-3.13-1.22-1.6 0-2.440.68-3.12 1.22-0.590.47-0.970.78-1.870.78-0.9 0-1.29-0.31-1.87-0.78C4.44 12.68 3.6 12 2 12v2c0.9 0 1.290.31 1.870.780.680.54 1.52 1.22 3.12 1.22s2.45-0.68 3.13-1.22c0.59-0.470.98-0.78 1.87-0.780.9 0 1.310.33 1.880.780.680.54 1.52 1.22 3.13 1.22 1.6 0 2.45-0.68 3.13-1.220.59-0.470.98-0.78 1.88-0.78v-2c-1.6 0-2.450.68-3.12 1.22zM17 19c-0.9 0-1.29-0.31-1.88-0.78-0.68-0.54-1.52-1.22-3.13-1.22-1.6 0-2.440.68-3.12 1.22-0.590.47-0.970.78-1.870.78-0.9 0-1.29-0.31-1.87-0.78C4.44 17.68 3.6 17 2 17v2c0.9 0 1.290.31 1.870.780.680.54 1.52 1.22 3.12 1.22s2.45-0.68 3.13-1.22c0.59-0.470.98-0.78 1.87-0.780.9 0 1.310.33 1.880.780.680.54 1.52 1.22 3.13 1.22 1.6 0 2.45-0.68 3.13-1.220.59-0.470.98-0.78 1.88-0.78v-2c-1.6 0-2.450.68-3.12 1.22-0.570.45-0.980.78-1.880.78zM11 5.42l2.1 2.1-2.06 2.57c0.29-0.060.6-0.090.95-0.09 1.6 0 2.450.68 3.13 1.220.590.470.980.78 1.880.780.9 0 1.31-0.33 1.88-0.780.13-0.10.27-0.220.42-0.33l-2.1-2.090.010-5.5-5.5a11 0 0 0-1.41 0l-4 4 1.41 1.41L11 5.42z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxSwim;
