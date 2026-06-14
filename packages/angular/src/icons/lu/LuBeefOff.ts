import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-beef-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuBeefOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.77 6.11a2.5 2.5 0 0 1 3.12 3.12"}],["path",{"d":"M17.85 12.19a6.5 6.5 0 0 0-9.03-9.04"}],["path",{"d":"M18.01 18.01C15.03 20.35 10.83 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"}],["path",{"d":"m18.5 6 2.19 4.5a6.48 6.48 0 0 1-0.14 4.39"}],["path",{"d":"m2 2 20 20"}],["path",{"d":"M6.36 6.37a7 7 0 0 0-0.070.23c-1.1 3.13-0.78 3.9-3.18 6.08A3 3 0 0 0 5 18c3.36 0 6.99-1.27 9.85-3.15"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuBeefOff;
