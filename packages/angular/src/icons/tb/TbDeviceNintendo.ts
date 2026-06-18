import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-device-nintendo",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbDeviceNintendo {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10 20v-16h-3a4 4 0 0 0 -4 4v8a4 4 0 0 0 4 4h3"}],["path",{"d":"M14 20v-16h3a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-3"}],["path",{"d":"M16.5 15.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0","fill":"currentColor"}],["path",{"d":"M5.5 8.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0","fill":"currentColor"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbDeviceNintendo;
