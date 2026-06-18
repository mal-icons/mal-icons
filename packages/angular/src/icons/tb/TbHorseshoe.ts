import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-horseshoe",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbHorseshoe {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19 17c0.5 -1.24 2 -2 2 -5s-1 -9 -9 -9s-9 6 -9 9s1.5 3.75 2 5l-2 1l2 3l2.41 -1.15c1.25 -0.71 1.78 -2.08 1.2 -3.36c-1.08 -2.41 -1.61 -8.49 3.39 -8.49s4.47 6.08 3.39 8.49c-0.57 1.28 -0.04 2.65 1.2 3.36l2.41 1.15l2 -3l-2 -1"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbHorseshoe;
