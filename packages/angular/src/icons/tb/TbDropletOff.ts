import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-droplet-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbDropletOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18.96 14.94a6.54 6.54 0 0 0 -0.9 -4.06l-4.89 -7.26c-0.42 -0.63 -1.29 -0.8 -1.94 -0.4a1.38 1.38 0 0 0 -0.41 0.4l-1.28 1.9m-1.62 2.42l-1.99 2.95c-1.69 2.84 -1.03 6.44 1.57 8.55c2.6 2.11 6.4 2.11 9 0a6.83 6.83 0 0 0 1.38 -1.5"}],["path",{"d":"M3 3l18 18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbDropletOff;
