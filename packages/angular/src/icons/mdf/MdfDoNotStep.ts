import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-do-not-step",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfDoNotStep {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m1.39 4.22 7.9 7.9c0.180.20.180.5-0.010.7a0.490.49 0 0 1-0.7 0L6.87 11.1c-0.110.4-0.260.78-0.45 1.12l1.4 1.4c0.20.20.20.51 0 0.71a0.490.49 0 0 1-0.7 0l-1.27-1.27c-0.240.29-0.50.56-0.770.8l1.28 1.28c0.20.20.20.51 0 0.71-0.10.1-0.230.15-0.360.15s-0.26-0.05-0.35-0.15l-1.38-1.38c-0.690.46-1.390.79-1.97 1.02-0.780.31-1.3 1.04-1.3 1.88V20h9.5l3.33-3.33 5.94 5.94 1.41-1.41L2.81 2.81 1.39 4.22zm17.12 11.46-1.41-1.41 4.48-4.48L23 11.2l-4.49 4.48zm2.37-6.6-4.48 4.48-7.1-7.09L13.8 2l7.08 7.08z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfDoNotStep;
