import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-interpreter-mode",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdInterpreterMode {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20.5 16.5c-0.83 0-1.5-0.67-1.5-1.5v-2.5c0-0.830.67-1.5 1.5-1.5s1.50.67 1.5 1.5V15c0 0.83-0.67 1.5-1.5 1.5zM20 20h1v-1.54c1.69-0.24 3-1.7 3-3.46h-1a2.5 2.5 0 0 1-5 0h-1c0 1.76 1.31 3.22 3 3.46V20zM9 12c-2.21 0-4-1.79-4-4a4 4 0 0 1 5.34-3.77A5.94 5.94 0 0 0 9 8c0 1.430.5 2.74 1.34 3.77-0.420.15-0.870.23-1.340.23zm-1.89 1.13A4.97 4.97 0 0 0 5 17.22V20H1v-2.78c0-1.120.61-2.15 1.61-2.66 1.24-0.64 2.76-1.19 4.5-1.43zM11 8c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4-4-1.79-4-4zm2 0c0 1.10.9 2 2 2s2-0.9 2-2-0.9-2-2-2-2 0.9-2 2zm2 7c-2.37 0-4.290.73-5.48 1.34-0.320.16-0.520.5-0.520.88V18h7.17c0.50.86 1.25 1.56 2.15 2H7v-2.78c0-1.120.61-2.15 1.61-2.66C10.29 13.7 12.47 13 15 13c0.39 0 0.770.02 1.140.05-0.330.59-0.55 1.26-0.62 1.96-0.17-0.01-0.34-0.01-0.52-0.01z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdInterpreterMode;
