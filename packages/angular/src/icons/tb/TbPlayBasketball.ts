import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-play-basketball",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbPlayBasketball {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9.01 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M5 21l3 -3l0.75 -1.5"}],["path",{"d":"M14 21v-4l-4 -3l0.5 -6"}],["path",{"d":"M5 12l1 -3l4.5 -1l3.5 3l4 -0.5"}],["path",{"d":"M18.01 15.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbPlayBasketball;
