import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-mushroom-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbMushroomOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5.87 5.89a8.13 8.13 0 0 0 -1.87 5.21a0.9 0.9 0 0 0 0.9 0.9h7.1m4 0h3.1a0.9 0.9 0 0 0 0.9 -0.9c0 -4.47 -3.58 -8.1 -8 -8.1c-1.43 0 -2.77 0.38 -3.94 1.05"}],["path",{"d":"M10 12v7a2 2 0 1 0 4 0v-5"}],["path",{"d":"M3 3l18 18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbMushroomOff;
