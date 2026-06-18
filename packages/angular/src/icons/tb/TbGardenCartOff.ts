import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-garden-cart-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbGardenCartOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15.73 15.73a2.5 2.5 0 1 0 3.54 3.53"}],["path",{"d":"M6 8v11a1 1 0 0 0 1.81 0.59l3.69 -5.09v0.06"}],["path",{"d":"M6 8h2m4 0h9l-3 6.01m-3.32 0.69l-4.28 -0.45a4 4 0 0 1 -3.3 -2.49l-2.85 -7.13a1 1 0 0 0 -0.93 -0.63h-1.32"}],["path",{"d":"M3 3l18 18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbGardenCartOff;
