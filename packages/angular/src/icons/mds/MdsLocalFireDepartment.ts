import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-local-fire-department",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsLocalFireDepartment {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m12 12.9-2.13 2.09c-0.560.56-0.87 1.29-0.87 2.07C9 18.68 10.35 20 12 20s3-1.32 3-2.94c0-0.78-0.31-1.52-0.87-2.07L12 12.9z"}],["path",{"d":"m16 6-0.440.55C14.38 8.02 12 7.19 12 5.3V2S4 6 4 13c0 2.92 1.56 5.47 3.89 6.86-0.56-0.79-0.89-1.76-0.89-2.8 0-1.320.52-2.56 1.47-3.5L12 10.1l3.53 3.47c0.950.93 1.47 2.17 1.47 3.5 0 1.02-0.31 1.96-0.85 2.75 1.89-1.15 3.29-3.06 3.71-5.30.66-3.55-1.07-6.9-3.86-8.52z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsLocalFireDepartment;
