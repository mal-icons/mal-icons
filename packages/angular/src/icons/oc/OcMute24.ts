import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-mute-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcMute24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 3.75v16.5a0.750.75 0 0 1-1.250.56L5.46 16H2.75A1.75 1.75 0 0 1 1 14.25v-4.5C1 8.78 1.78 8 2.75 8h2.71l5.29-4.8A0.750.75 0 0 1 12 3.75ZM6.26 9.31a0.750.75 0 0 1-0.50.2h-3a0.250.25 0 0 0-0.250.25v4.5c0 0.140.110.250.250.25h3c0.19 0 0.370.070.510.2l4.25 3.86V5.45ZM16.28 8.22a0.750.75 0 1 0-1.06 1.06L17.94 12l-2.72 2.72a0.750.75 0 1 0 1.06 1.06L19 13.06l2.72 2.72a0.750.75 0 1 0 1.06-1.06L20.06 12l2.72-2.72a0.750.75 0 0 0-1.06-1.06L19 10.94l-2.72-2.72Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcMute24;
