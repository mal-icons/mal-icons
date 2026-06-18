import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-vtex",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiVtex {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M22.2 1.79H4.28c-1.39 0-2.28 1.47-1.63 2.69l1.79 3.38H1.19a1.2 1.2 0 0 0-0.590.15 1.19 1.19 0 0 0-0.440.42 1.18 1.18 0 0 0-0.03 1.17l5.77 10.86c0.10.190.250.350.440.46a1.2 1.2 0 0 0 1.23 0 1.19 1.19 0 0 0 0.44-0.46l1.57-2.93 1.96 3.7c0.69 1.3 2.56 1.3 3.260L23.79 4.42c0.64-1.19-0.23-2.62-1.59-2.62ZM14.15 8.98l-3.87 7.25a0.790.79 0 0 1-0.290.310.80.8 0 0 1-0.82 0 0.790.79 0 0 1-0.29-0.31L5.04 9.01a0.790.79 0 0 1 0.02-0.780.790.79 0 0 1 0.29-0.280.80.8 0 0 1 0.39-0.1h7.73a0.780.78 0 0 1 0.380.10.770.77 0 0 1 0.280.270.770.77 0 0 1 0.020.76z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiVtex;
