import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-hub",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfHub {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8.4 18.2c0.380.50.6 1.120.6 1.8 0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3c0.44 0 0.850.09 1.230.26l1.41-1.77a4.5 4.5 0 0 1-1.09-3.69l-2.03-0.68A3 3 0 0 1 0 9.5c0-1.66 1.34-3 3-3s3 1.34 3 3c0 0.07 0 0.14-0.010.21l2.030.68a4.47 4.47 0 0 1 3.22-2.32V5.91A3.02 3.02 0 0 1 9 3c0-1.66 1.34-3 3-3s3 1.34 3 3c0 1.4-0.96 2.57-2.25 2.91v2.16c1.40.23 2.58 1.11 3.22 2.32L18 9.71V9.5c0-1.66 1.34-3 3-3s3 1.34 3 3-1.34 3-3 3c-1.06 0-1.98-0.55-2.52-1.37l-2.030.68a4.49 4.49 0 0 1-1.09 3.69l1.41 1.77c0.38-0.180.79-0.27 1.23-0.27 1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3c0-0.680.22-1.30.6-1.8l-1.41-1.77c-1.350.75-3.010.76-4.37 0L8.4 18.2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfHub;
