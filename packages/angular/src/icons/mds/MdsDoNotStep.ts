import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-do-not-step",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsDoNotStep {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m1.39 4.22 8.24 8.24-0.690.72-2.07-2.08c-0.110.4-0.260.78-0.45 1.12l1.75 1.75-0.690.72-1.63-1.63c-0.240.29-0.50.56-0.770.8l1.63 1.63-0.70.72-1.74-1.74c-1.440.96-2.93 1.35-3.27 1.45V20h9.5l3.33-3.33 5.94 5.94 1.41-1.41L2.81 2.81 1.39 4.22zm17.12 11.46-1.41-1.41 4.48-4.48L23 11.2l-4.49 4.48zm2.37-6.6-4.48 4.48-7.1-7.09L13.8 2l7.08 7.08z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsDoNotStep;
