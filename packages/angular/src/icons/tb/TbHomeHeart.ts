import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-home-heart",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbHomeHeart {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21 12l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h6"}],["path",{"d":"M9 21v-6a2 2 0 0 1 2 -2h2c0.39 0 0.75 0.11 1.06 0.3"}],["path",{"d":"M19 21.5l2.52 -2.58a1.74 1.74 0 0 0 0 -2.41a1.63 1.63 0 0 0 -2.35 0l-0.17 0.17l-0.17 -0.17a1.63 1.63 0 0 0 -2.35 0a1.74 1.74 0 0 0 0 2.41l2.51 2.59l0 -0.01"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbHomeHeart;
