import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-pencil-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuPencilOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m10 10-6.16 6.16a2 2 0 0 0-0.50.83l-1.32 4.36a0.50.5 0 0 0 0.620.62l4.36-1.32a2 2 0 0 0 0.83-0.5L14 13.98"}],["path",{"d":"m12.83 7.17 4.36-4.35a1 1 0 1 1 3.99 3.99l-4.35 4.35"}],["path",{"d":"m15 5 4 4"}],["path",{"d":"m2 2 20 20"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuPencilOff;
