import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-perm-data-setting",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsPermDataSetting {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18.99 11.5c0.34 0 0.670.03 1 0.07L20 0 0 20h11.56c-0.04-0.33-0.07-0.66-0.07-1 0-4.14 3.36-7.5 7.5-7.5zm3.71 7.99c0.02-0.160.04-0.320.04-0.49s-0.01-0.33-0.04-0.49l1.06-0.83a0.260.26 0 0 0 0.06-0.32l-1-1.73c-0.06-0.11-0.19-0.15-0.31-0.11l-1.240.5c-0.26-0.2-0.54-0.37-0.85-0.49l-0.19-1.32c-0.01-0.12-0.12-0.21-0.24-0.21h-2c-0.12 0-0.230.09-0.250.21l-0.19 1.32c-0.30.13-0.590.29-0.850.49l-1.24-0.5c-0.11-0.04-0.24 0-0.310.11l-1 1.73c-0.060.11-0.040.240.060.32l1.060.83a3.91 3.91 0 0 0 0 0.98l-1.060.83a0.260.26 0 0 0-0.060.32l1 1.73c0.060.110.190.150.310.11l1.24-0.5c0.260.20.540.370.850.49l0.19 1.32c0.020.120.120.210.250.21h2c0.12 0 0.23-0.090.25-0.21l0.19-1.32c0.3-0.130.59-0.290.84-0.49l1.250.5c0.110.040.24 0 0.31-0.11l1-1.73a0.260.26 0 0 0-0.06-0.32l-1.07-0.83zm-3.71 1.01c-0.83 0-1.5-0.67-1.5-1.5s0.67-1.5 1.5-1.5 1.50.67 1.5 1.5-0.67 1.5-1.5 1.5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsPermDataSetting;
