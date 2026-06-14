import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-star-x",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuStarX {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m15.5 15.5 5 5"}],["path",{"d":"m20.06 11.53 1.78-1.73a0.530.53 0 0 0-0.29-0.9l-5.17-0.75a2.1 2.1 0 0 1-1.59-1.16l-2.31-4.68a0.530.53 0 0 0-0.950L9.22 6.97a2.1 2.1 0 0 1-1.6 1.16l-5.160.76a0.530.53 0 0 0-0.290.91l3.74 3.64a2.1 2.1 0 0 1 0.61 1.88l-0.88 5.14a0.530.53 0 0 0 0.770.56l4.62-2.43a2.1 2.1 0 0 1 0.99-0.24 2 2 0 0 1 0.130"}],["path",{"d":"m20.5 15.5-5 5"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuStarX;
