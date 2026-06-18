import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-chakraui",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiChakraui {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7.68 1.58a3.49 3.49 0 0 0-3.03 1.76L0.27 11a2.04 2.04 0 0 0-0.06 1.89l4.49 7.78a3.49 3.49 0 0 0 3.03 1.75l8.6-0.01a3.5 3.5 0 0 0 3.03-1.76l4.39-7.65a2.03 2.03 0 0 00-2.01L19.34 3.34a3.49 3.49 0 0 0-3.03-1.76Zm4.37 1.24V9.11c0 0.320.230.60.540.66l6.09 1.19c-2 3.47-4.01 6.93-6.01 10.4-0.170.3-0.620.18-0.62-0.17v-6.29a0.670.67 0 0 0-0.54-0.66l-6.07-1.19 5.99-10.39c0.17-0.290.62-0.180.620.17z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiChakraui;
