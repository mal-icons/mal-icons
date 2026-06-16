import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-network-ping",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrNetworkPing {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M190-240q-13 0-21.5-8.5T160-270q0-13 8.5-21.5T190-300h254L105-639q-9-9-9-21t9-21q9-9 21-9t21 9l332 332 234-233q-6-11-9.5-23.5T700-630q0-38 26-64t64-26q38 0 64 26t26 64q0 38-26 64t-64 26q-8 0-14.5-1t-14.5-4L516-300h254q13 0 21.5 8.5T800-270q0 13-8.5 21.5T770-240H190Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrNetworkPing;
