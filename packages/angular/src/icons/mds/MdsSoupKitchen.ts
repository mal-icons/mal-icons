import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-soup-kitchen",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsSoupKitchen {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6.4 7c-0.340.55-0.40.97-0.4 1.38C6 9.15 7 11 7 12c0 0.95-0.4 1.5-0.4 1.5H5.1s0.4-0.550.4-1.5c0-1-1-2.85-1-3.62 0-0.410.06-0.830.4-1.38h1.5zm5 0c-0.340.55-0.40.97-0.4 1.38 0 0.77 1 2.62 1 3.62 0 0.95-0.4 1.5-0.4 1.5h1.5s0.4-0.550.4-1.5c0-1-1-2.85-1-3.62 0-0.410.06-0.830.4-1.38h-1.5zM8.15 7c-0.340.55-0.40.97-0.4 1.38 0 0.77 1 2.63 1 3.62 0 0.95-0.4 1.5-0.4 1.5h1.5s0.4-0.550.4-1.5c0-1-1-2.85-1-3.62 0-0.410.06-0.830.4-1.38h-1.5zm13.32-0.5s0.13-1.060.13-1.5c0-1.65-1.35-3-3-3-1.54 0-2.81 1.16-2.98 2.65L14.53 15H2.93c-0.02 3.87 3.09 7 6.82 7 3.48 0 6.34-2.73 6.71-6.23L17.61 4.9c0.05-0.510.47-0.90.99-0.90.55 0 1 0.45 1 1 0 0.3-0.1 1.25-0.1 1.25l1.970.25z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsSoupKitchen;
