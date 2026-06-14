import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-pulse-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcPulse16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6 2c0.31 0 0.580.190.70.47L10 10.73l1.3-3.26A0.750.75 0 0 1 12 7h3.25a0.750.75 0 0 1 0 1.5h-2.74l-1.81 4.53a0.750.75 0 0 1-1.39 0L6 4.77 4.7 8.03A0.750.75 0 0 1 4 8.5H0.75a0.750.75 0 0 1 0-1.5h2.74l1.81-4.53A0.750.75 0 0 1 6 2Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcPulse16;
