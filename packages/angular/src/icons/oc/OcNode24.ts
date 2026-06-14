import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-node-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcNode24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 7a2 2 0 1 00-4A2 2 0 0 0 12 7Zm0 14a2 2 0 1 00-4A2 2 0 0 0 12 21ZM2 18V6a1.75 1.75 0 0 1 1.75-1.75H7.5a0.750.75 0 0 1 0 1.5H3.75A0.250.25 0 0 0 3.5 6v12l0.010.05a0.250.25 0 0 0 0.250.2H7.5a0.750.75 0 0 1 0 1.5H3.75A1.75 1.75 0 0 1 2 18Zm18.5 0V6a0.250.25 0 0 0-0.25-0.25H16.5a0.750.75 0 0 1 0-1.5h3.75A1.75 1.75 0 0 1 22 6v12c0 0.46-0.180.91-0.51 1.24a1.75 1.75 0 0 1-1.240.51H16.5a0.750.75 0 0 1 0-1.5h3.75a0.250.25 0 0 0 0.25-0.25Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcNode24;
