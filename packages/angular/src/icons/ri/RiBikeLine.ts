import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-bike-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiBikeLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5.5 12H4V7H2V5H8V7H6V9.8L15.81 7.17L15.23 5H12V3H15.98C16.43 2.99 16.84 3.29 16.97 3.74L18.52 9.54L16.59 10.05L16.33 9.1L5.5 12ZM5 19C6.1 19 7 18.1 7 17C7 15.9 6.1 15 5 15C3.9 15 3 15.9 3 17C3 18.1 3.9 19 5 19ZM5 21C2.79 21 1 19.21 1 17C1 14.79 2.79 13 5 13C7.21 13 9 14.79 9 17C9 19.21 7.21 21 5 21ZM18 19C19.66 19 21 17.66 21 16C21 14.34 19.66 13 18 13C16.34 13 15 14.34 15 16C15 17.66 16.34 19 18 19ZM18 21C15.24 21 13 18.76 13 16C13 13.24 15.24 11 18 11C20.76 11 23 13.24 23 16C23 18.76 20.76 21 18 21Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiBikeLine;
