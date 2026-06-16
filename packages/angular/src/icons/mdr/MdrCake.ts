import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-cake",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrCake {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12.68 5.88c0.7-0.24 1.22-0.9 1.3-1.640.05-0.47-0.05-0.91-0.28-1.27L12.420.75a0.510.51 0 0 0-0.87 0l-1.28 2.22c-0.170.3-0.270.65-0.27 1.03 0 1.32 1.3 2.35 2.68 1.88zm3.85 10.04-1-1-1.08 1.07c-1.3 1.3-3.58 1.31-4.89 0l-1.07-1.07-1.09 1.07C6.75 16.64 5.88 17 4.96 17c-0.73 0-1.4-0.23-1.96-0.61V20c0 1.10.9 2 2 2h14c1.1 0 2-0.9 2-2v-3.61c-0.750.51-1.710.75-2.740.52-0.66-0.14-1.25-0.51-1.73-0.99zM18 9h-5V8c0-0.55-0.45-1-1-1s-1 0.45-1 1v1H6c-1.66 0-3 1.34-3 3v1.46c0 0.850.5 1.67 1.31 1.940.730.24 1.520.06 2.03-0.46l2.14-2.13 2.13 2.13c0.760.76 2.010.76 2.77 0l2.14-2.13 2.13 2.13c0.430.43 1.030.63 1.650.550.99-0.13 1.69-1.06 1.69-2.06v-1.42A2.98 2.98 0 0 0 18 9z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrCake;
