import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-bolt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrBolt {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10.67 21c-0.35 0-0.62-0.31-0.57-0.66L11 14H7.5c-0.88 0-0.33-0.75-0.31-0.78 1.26-2.23 3.15-5.53 5.65-9.93a0.580.58 0 0 1 1.070.37l-0.9 6.34h3.51c0.4 0 0.620.190.40.66-3.29 5.74-5.2 9.09-5.75 10.05-0.10.18-0.290.29-0.50.29z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrBolt;
