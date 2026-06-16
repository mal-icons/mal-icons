import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-map",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfMap {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m20.5 3-0.160.03L15 5.1 9 3 3.36 4.9c-0.210.07-0.360.25-0.360.48V20.5c0 0.280.220.50.50.5l0.16-0.03L9 18.9l6 2.1 5.64-1.9c0.21-0.070.36-0.250.36-0.48V3.5c0-0.28-0.22-0.5-0.5-0.5zM15 19l-6-2.11V5l6 2.11V19z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfMap;
