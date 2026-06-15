import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-rx-thick-arrow-up",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RxThickArrowUp {
  readonly viewBox = "0 0 15 15";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M7.5 1C7.66 1 7.81 1.08 7.91 1.21L12.91 8.21C13.02 8.36 13.03 8.56 12.94 8.73C12.86 8.9 12.69 9 12.5 9H10V11.5C10 11.78 9.78 12 9.5 12H5.5C5.22 12 5 11.78 5 11.5V9H2.5C2.31 9 2.14 8.9 2.06 8.73C1.97 8.56 1.98 8.36 2.09 8.21L7.09 1.21C7.19 1.08 7.34 1 7.5 1ZM3.47 8H5.5C5.78 8 6 8.22 6 8.5V11H9V8.5C9 8.22 9.22 8 9.5 8H11.53L7.5 2.36L3.47 8Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RxThickArrowUp;
