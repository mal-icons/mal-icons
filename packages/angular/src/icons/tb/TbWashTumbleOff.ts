import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-wash-tumble-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbWashTumbleOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20.12 20.13a2.99 2.99 0 0 1 -2.12 0.87h-12a3 3 0 0 1 -3 -3v-12c0 -0.83 0.34 -1.58 0.88 -2.12m3.12 -0.88h11a3 3 0 0 1 3 3v11"}],["path",{"d":"M17.74 13.74a6 6 0 0 0 -7.49 -7.48m-2.5 1.5a6 6 0 1 0 8.48 8.49"}],["path",{"d":"M3 3l18 18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbWashTumbleOff;
