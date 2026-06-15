import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-pie-chart",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscPieChart {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8.5 1C8.22 1 8 1.22 8 1.5V7.5C8 7.78 8.22 8 8.5 8H14.5C14.78 8 15 7.78 15 7.5C15 3.91 12.09 1 8.5 1ZM9 7V2.02C11.64 2.26 13.74 4.36 13.98 7H9ZM7 3.52C7 3.38 6.94 3.25 6.84 3.15C6.73 3.06 6.59 3.01 6.46 3.02C3.4 3.3 1 5.87 1 9C1 12.31 3.69 15 7 15C10.13 15 12.7 12.6 12.98 9.54C12.99 9.41 12.94 9.27 12.85 9.16C12.75 9.06 12.62 9 12.48 9H7V3.52ZM2 9C2 6.58 3.72 4.56 6 4.1V9.5C6 9.78 6.22 10 6.5 10H11.9C11.44 12.28 9.42 14 7 14C4.24 14 2 11.76 2 9Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscPieChart;
