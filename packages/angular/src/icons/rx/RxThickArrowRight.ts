import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-rx-thick-arrow-right",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RxThickArrowRight {
  readonly viewBox = "0 0 15 15";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M14 7.5C14 7.66 13.92 7.81 13.79 7.91L6.79 12.91C6.64 13.02 6.44 13.03 6.27 12.94C6.1 12.86 6 12.69 6 12.5L6 10L3.5 10C3.22 10 3 9.78 3 9.5L3 5.5C3 5.22 3.22 5 3.5 5L6 5L6 2.5C6 2.31 6.1 2.14 6.27 2.06C6.44 1.97 6.64 1.98 6.79 2.09L13.79 7.09C13.92 7.19 14 7.34 14 7.5ZM7 3.47L7 5.5C7 5.78 6.78 6 6.5 6L4 6L4 9L6.5 9C6.78 9 7 9.22 7 9.5L7 11.53L12.64 7.5L7 3.47Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RxThickArrowRight;
