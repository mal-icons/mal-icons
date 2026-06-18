import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-xo",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiXo {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m1.63 5.7 4.28 5.37 4.27-5.37h1.61l-5.09 6.38 4.96 6.22h-1.61L5.9 13.1l-4.14 5.2H0.13l4.96-6.22L0 5.7h1.63Zm16.48-0.08C21.42 5.62 24 8.63 24 12c0 3.43-2.61 6.33-5.88 6.38-3.3-0.1-5.8-2.88-5.91-6.16L12.2 12c0-3.44 2.64-6.38 5.91-6.38Zm0 1.27c-2.59 0-4.64 2.4-4.64 5.120.08 2.74 1.98 5 4.44 5.11l0.20c2.58 0 4.62-2.41 4.62-5.11 0-2.75-2.09-5.12-4.62-5.12Zm0.94 3.71c0.51 0 1.10.660.7 1.47-0.30.61-1.37 1.19-1.61 1.32l-0.040.02s-1.32-0.66-1.65-1.34c-0.4-0.810.2-1.470.7-1.470.56 0 0.950.540.950.54s0.39-0.530.95-0.53Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiXo;
