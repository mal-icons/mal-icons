import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-hi-globe-americas",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class HiGlobeAmericas {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"stroke-linecap":"round","stroke-linejoin":"round","d":"m6.12 5.190.32 1.91A6 6 0 0 0 8.11 10.36L9.75 12l-0.390.78c-0.220.43-0.130.960.21 1.3l1.35 1.35c0.210.210.330.50.330.8v1.09c0 0.430.240.820.62 1.01l0.150.08c0.430.220.960.13 1.3-0.21l0.72-0.72a8.7 8.7 0 0 0 2.29-4.04 1.09 1.09 0 0 0-0.36-1.1l-1.33-1.11c-0.25-0.21-0.58-0.3-0.9-0.24l-1.170.2a1.13 1.13 0 0 1-0.98-0.31l-0.29-0.29a1.13 1.13 0 0 1 0-1.59l0.13-0.13a1.13 1.13 0 0 1 1.3-0.21l0.60.3a0.810.81 0 0 0 1.09-1.09L14.25 7.5l1.26-0.84a4.5 4.5 0 0 0 1.53-1.73l0.15-0.29M6.12 5.19A9 9 0 1 0 17.18 4.64M6.12 5.19A8.97 8.97 0 0 1 12 3c1.93 0 3.720.61 5.18 1.64"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":1.5};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default HiGlobeAmericas;
