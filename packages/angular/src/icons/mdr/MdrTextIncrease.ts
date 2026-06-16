import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-text-increase",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrTextIncrease {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2.61 19c0.48 0 0.91-0.3 1.06-0.75l1.01-2.83h5.65l0.99 2.82c0.160.460.590.76 1.070.760.79 0 1.33-0.79 1.05-1.52L9.19 6.17C8.93 5.47 8.25 5 7.5 5s-1.430.47-1.69 1.17L1.56 17.48c-0.280.730.27 1.52 1.05 1.52zM7.44 7.6h0.12l2.03 5.79H5.41L7.44 7.6zM15 12c0-0.550.45-1 1-1h2V9c0-0.550.45-1 1-1s1 0.45 1 1v2h2c0.55 0 1 0.45 1 1s-0.45 1-1 1h-2v2c0 0.55-0.45 1-1 1s-1-0.45-1-1v-2h-2c-0.55 0-1-0.45-1-1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrTextIncrease;
