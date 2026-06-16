import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-castle",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoCastle {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M40-120v-470h60v80h110v-330h60v80h100v-80h60v80h100v-80h60v80h100v-80h60v330h110v-80h60v470H570v-120q0-38-26-64t-64-26q-38 0-64 26t-26 64v120H40Zm60-60h230v-60q0-63 43.5-106.5T480-390q63 0 106.5 43.5T630-240v60h230v-270H690v-250H270v250H100v270Zm270-310h60v-110h-60v110Zm160 0h60v-110h-60v110Zm-50 50Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoCastle;
