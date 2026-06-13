import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-easel-sharp",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoEaselSharp {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"d":"M468,64H278V32H234V64H44A12,12,0,0,0,32,76V356a12,12,0,0,0,12,12h78.19L89.93,470.46l36.53,9.61L161.74,368H234v64h44V368h71.84l31,111.7,36.83-8.57L389.05,368H468a12,12,0,0,0,12-12V76A12,12,0,0,0,468,64ZM442,330H70V102H442Z"}],["rect",{"x":"88","y":"120","width":"336","height":"192"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoEaselSharp;
