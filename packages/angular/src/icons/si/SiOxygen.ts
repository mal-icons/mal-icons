import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-oxygen",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiOxygen {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M23.89 12c0-6.63-5.32-12-11.89-12S0.11 5.370.11 12 5.43 24 12 24c2.01 0 3.91-0.51 5.57-1.40.620.35 1.340.56 2.110.56 2.33 0 4.21-1.86 4.21-4.16 0-0.95-0.32-1.82-0.86-2.520.55-1.380.86-2.890.86-4.48zm-21.40.01c0-5.45 4.27-9.86 9.54-9.86s9.54 4.42 9.54 9.86c0 1.07-0.17 2.1-0.47 3.06a4.23 4.23 0 0 0-1.41-0.24c-2.33 0-4.21 1.87-4.21 4.17 0 0.720.19 1.40.51 1.99a9.21 9.21 0 0 1-3.950.89c-5.270-9.54-4.42-9.54-9.86zm17.19 9.86c-1.510.02-2.84-1.27-2.82-2.79 0-1.54 1.26-2.79 2.82-2.79 1.51-0.02 2.84 1.27 2.82 2.79 0 1.54-1.26 2.79-2.82 2.79z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiOxygen;
