import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-bulb",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxBulb {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9 20h6v2H9zm7.91-6.29C17.94 12.51 19 11.26 19 9c0-3.86-3.14-7-7-7S5 5.14 5 9c0 2.29 1.07 3.53 2.1 4.730.360.420.730.85 1.08 1.350.140.210.3810.59 1.92H8v2h8v-2h-0.77c0.21-0.930.45-1.720.59-1.920.35-0.50.73-0.94 1.09-1.36zm-2.720.21c-0.430.62-0.8 2.08-1.01 3.08h-2.35c-0.21-1-0.57-2.46-1.01-3.08a20.5 20.5 0 0 0-1.2-1.49C7.64 11.29 7 10.54 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.52-0.64 2.27-1.61 3.41-0.370.44-0.80.93-1.2 1.51z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxBulb;
