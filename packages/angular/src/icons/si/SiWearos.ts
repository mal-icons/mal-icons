import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-wearos",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiWearos {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8.42 21.13c-0.97 0-1.89-0.56-2.31-1.5L0.22 6.42C-0.35 5.140.22 3.65 1.5 3.08c1.28-0.57 2.770.01 3.34 1.28l5.88 13.21c0.57 1.28-0.01 2.77-1.28 3.34a2.53 2.53 0 1-1.030.22zm7.20.04c-0.89 0-1.74-0.51-2.13-1.38L7.39 6.1C6.87 4.93 7.4 3.55 8.57 3.03c1.17-0.52 2.550.01 3.07 1.18l6.09 13.69c0.52 1.17-0.01 2.55-1.18 3.07a2.31 2.31 0 1-0.950.2zM24 5.2a2.33 2.33 0 1-2.33 2.33 2.33 2.33 0 1-2.33-2.33 2.33 2.33 0 12.33-2.33A2.33 2.33 0 124 5.19zm-2.61 5.12a2.49 2.49 0 1-2.49 2.49 2.49 2.49 0 1-2.49-2.49 2.49 2.49 0 12.49-2.49 2.49 2.49 0 12.49 2.49Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiWearos;
