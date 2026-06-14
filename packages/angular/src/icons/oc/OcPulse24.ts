import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-pulse-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcPulse24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9 2.5a0.750.75 0 0 1 0.690.46l6.3 15.31 2.56-6.3a0.750.75 0 0 1 0.7-0.47h4a0.750.75 0 0 1 0 1.5h-3.49l-3.06 7.53a0.750.75 0 0 1-1.390L9 5.21l-3.05 7.33A0.750.75 0 0 1 5.25 13H0.75a0.750.75 0 0 1 0-1.5h4l3.56-8.54a0.750.75 0 0 1 0.69-0.46Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcPulse24;
