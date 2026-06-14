import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-flame-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcFlame24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14.27 1.63c0 3.55 1.87 5.33 3.48 7.02 1.54 1.62 3.01 3.16 3.01 6.1 0 4.81-3.75 8.25-8.56 8.25-4.81 0-8.93-3.42-8.93-8.25 0-2.040.96-4.01 2.51-4.90.31-0.170.670.010.80.33C7.56 12.68 8.8 12.64 9.44 12c0.39-0.390.47-1.120-2.06-2.4-4.81 1.86-8.28 4.2-8.850.34-0.080.620.20.630.54ZM12.19 21.5c4.06 0 7.07-2.84 7.07-6.75 0-2.34-1.09-3.49-2.68-5.16l-0.02-0.02c-1.44-1.52-3.14-3.35-3.65-6.56a6.15 6.15 0 0 0-1.91 1.76c-0.79 1.14-1.15 2.63-0.22 4.50.6 1.210.78 2.74-0.28 3.79-0.660.66-1.76 1.1-2.960.59-0.75-0.32-1.35-0.95-1.84-1.79-0.570.71-0.95 1.74-0.95 2.89 0 3.85 3.29 6.75 7.44 6.75Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcFlame24;
