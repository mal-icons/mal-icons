import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-hop-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuHopOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10.82 16.12c1.690.6 3.910.79 5.180.850.280.010.53-0.090.7-0.27"}],["path",{"d":"M11.14 20.57c0.520.24 2.44 1.12 4.08 1.370.460.060.86-0.250.9-0.710.12-1.52-0.3-3.43-0.5-4.28"}],["path",{"d":"M16.13 21.05c1.650.63 3.680.84 4.870.91a0.90.9 0 0 0 0.7-0.26"}],["path",{"d":"M17.99 5.52a20.83 20.83 0 0 1 3.15 4.50.80.8 0 0 1-0.68 1.13c-1.170.1-2.50.02-3.9-0.25"}],["path",{"d":"M20.57 11.14c0.240.52 1.12 2.44 1.37 4.080.040.3-0.080.59-0.310.75"}],["path",{"d":"M4.93 4.93a10 10 0 0 0-0.67 13.4c0.350.430.960.4 1.17-0.120.69-1.71 1.07-5.07 1.07-6.71 1.340.45 3.10.9 4.880.62a0.850.85 0 0 0 0.48-0.24"}],["path",{"d":"M5.52 17.99c1.050.95 2.91 2.42 4.5 3.15a0.80.8 0 0 0 1.13-0.68c0.2-2.34-0.33-5.3-1.57-8.28"}],["path",{"d":"M8.35 2.68a10 10 0 0 1 9.98 1.58c0.430.350.40.96-0.12 1.17-1.50.6-4.30.98-6.07 1.05"}],["path",{"d":"m2 2 20 20"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuHopOff;
