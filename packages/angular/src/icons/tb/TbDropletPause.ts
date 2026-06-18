import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-droplet-pause",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbDropletPause {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18.95 13.46a6.57 6.57 0 0 0 -0.89 -2.58l-4.89 -7.26c-0.42 -0.62 -1.29 -0.8 -1.94 -0.4a1.38 1.38 0 0 0 -0.41 0.4l-4.89 7.26c-1.69 2.84 -1.03 6.44 1.57 8.55a7.18 7.18 0 0 0 5.52 1.51"}],["path",{"d":"M17 17v5"}],["path",{"d":"M21 17v5"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbDropletPause;
