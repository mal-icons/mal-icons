import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-bell-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuBellOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10.27 21a2 2 0 0 0 3.46 0"}],["path",{"d":"M17 17H4a1 1 0 0 1-0.74-1.67C4.59 13.96 6 12.5 6 8a6 6 0 0 1 0.26-1.74"}],["path",{"d":"m2 2 20 20"}],["path",{"d":"M8.67 3.01A6 6 0 0 1 18 8c0 2.690.77 4.65 1.71 6.05"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuBellOff;
