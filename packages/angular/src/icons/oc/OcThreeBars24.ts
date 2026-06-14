import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-three-bars-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcThreeBars24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3.75 5.25a0.750.75 0 0 0 0 1.5h16.5a0.750.75 0 0 0 0-1.5H3.75Zm0 6a0.750.75 0 0 0 0 1.5h16.5a0.750.75 0 0 0 0-1.5H3.75Zm0 6a0.750.75 0 0 0 0 1.5h16.5a0.750.75 0 0 0 0-1.5H3.75Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcThreeBars24;
