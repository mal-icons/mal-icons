import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-paper-airplane-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcPaperAirplane24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M1.51 1.96a1.37 1.37 0 0 1 1.5-0.21l19.34 9.22a1.15 1.15 0 0 1 0 2.07L3.01 22.25a1.37 1.37 0 0 1-1.95-1.46L2.49 12 1.07 3.21a1.38 1.38 0 0 1 0.45-1.25Zm2.38 10.79-1.3 8.04L21.03 12 2.58 3.21l1.3 8.04h7.36a0.750.75 0 0 1 0 1.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcPaperAirplane24;
