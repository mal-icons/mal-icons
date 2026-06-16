import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-settings",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsSettings {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m19.44 12.99-0.010.02c0.04-0.330.08-0.670.08-1.01 0-0.34-0.03-0.66-0.07-0.99l0.010.02 2.44-1.92-2.43-4.22-2.87 1.160.010.01c-0.52-0.4-1.09-0.74-1.71-1h0.01L14.44 2H9.57l-0.44 3.07h0.01c-0.620.26-1.190.6-1.71 1l0.01-0.01-2.88-1.17-2.44 4.22 2.44 1.920.01-0.02c-0.040.33-0.070.65-0.070.99 0 0.340.030.680.08 1.01l-0.01-0.02-2.1 1.65-0.330.26 2.43 4.2 2.88-1.15-0.02-0.04c0.530.41 1.10.75 1.73 1.01h-0.03L9.58 22h4.85s0.03-0.180.06-0.42l0.38-2.65h-0.01c0.62-0.26 1.2-0.6 1.73-1.01l-0.020.04 2.88 1.15 2.43-4.2s-0.14-0.12-0.33-0.26l-2.11-1.66zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsSettings;
