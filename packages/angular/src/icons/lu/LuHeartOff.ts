import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-heart-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuHeartOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10.5 4.89a5.5 5.5 0 0 1 1.090.930.560.56 0 0 0 0.82 0A5.49 5.49 0 0 1 22 9.5c0 1.87-1 3.36-2.19 4.66"}],["path",{"d":"m16.97 16.97-3.46 3.35a2 2 0 0 1-3 0.02L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 2.75-4.76"}],["path",{"d":"m2 2 20 20"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuHeartOff;
