import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-4chan",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class Si_4chan {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.07 8.82S9.8 1.08 5.15 1.1C2.01 1.110.78 4.12 3.06 4.8c0 0-2.70.97-2.7 2.7 0 1.73 4.27 3.54 10.71 1.32zm1.93 5.92s0.9 7.79 5.56 7.99c3.140.14 4.5-2.82 2.26-3.6 0 0 2.74-0.84 2.82-2.570.08-1.72-4.11-3.74-10.64-1.82zm-3.67-1.55s-7.53 2.19-6.95 6.81c0.39 3.11 3.53 3.97 3.93 1.63 0 0 1.29 2.56 3 2.35 1.71-0.21 3-4.670.02-10.79zm5.62-2.47s7.73-1.35 7.66-6.01c-0.05-3.14-3.07-4.33-3.73-2.05 0 0-1-2.69-2.73-2.67-1.720.02-3.49 4.31-1.21 10.73z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default Si_4chan;
