import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-maximize-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcMaximize24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9.47 13.47a0.750.75 0 1 1 1.06 1.06l-5.72 5.72H9a0.750.75 0 0 1 0 1.5H3a0.730.73 0 0 1-0.13-0.01l-0.020c-0.010-0.03-0.01-0.04-0.01-0.03-0.01-0.07-0.02-0.1-0.03a0.660.66 0 0 1-0.08-0.040.70.7 0 0 1-0.28-0.28A0.710.71 0 0 1 2.25 21v-6a0.750.75 0 0 1 1.5 0v4.19l5.72-5.72ZM21 2.25a0.720.72 0 0 1 0.130.01l0.020c0.0100.030.010.040.010.030.010.070.020.10.03a0.660.66 0 0 1 0.080.040.70.7 0 0 1 0.280.280.660.66 0 0 1 0.10.37v6a0.750.75 0 0 1-1.5 0V4.81l-5.72 5.72a0.750.75 0 1 1-1.06-1.06l5.72-5.72H15a0.750.75 0 0 1 0-1.5h6Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcMaximize24;
