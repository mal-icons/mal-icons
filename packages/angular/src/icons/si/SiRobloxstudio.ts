import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-robloxstudio",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiRobloxstudio {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 13.94 15.36 L 1.83 12.11 L 0 18.93 L 18.93 24 L 21.61 14.01 L 14.79 12.18 L 13.94 15.36 Z M 5.07 0 L 2.39 9.99 L 9.21 11.82 L 10.06 8.64 L 22.17 11.89 L 24 5.07 L 5.07 0 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiRobloxstudio;
