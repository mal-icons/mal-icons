import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-gamepad-directional",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuGamepadDirectional {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.15 15.85a1.21 1.21 0 0 1 1.71 0l1.56 1.56A2 2 0 0 1 15 18.83V21a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2.17a2 2 0 0 1 0.59-1.41z"}],["path",{"d":"M18.83 15a2 2 0 0 1-1.41-0.59l-1.56-1.56a1.21 1.21 0 0 1 0-1.71l1.56-1.56A2 2 0 0 1 18.83 9H21a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1z"}],["path",{"d":"M6.59 14.41A2 2 0 0 1 5.17 15H3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h2.17a2 2 0 0 1 1.410.59l1.56 1.56a1.21 1.21 0 0 1 0 1.71z"}],["path",{"d":"M9 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2.17a2 2 0 0 1-0.59 1.41l-1.56 1.56a1.21 1.21 0 0 1-1.71 0l-1.56-1.56A2 2 0 0 1 9 5.17z"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuGamepadDirectional;
