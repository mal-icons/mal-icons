import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-moon-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbMoonOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7.96 3.95a8.97 8.97 0 0 1 4.04 -0.96v0.01h0.39a7.48 7.48 0 0 0 -2.07 3.31m-0.14 3.84c0.19 0.82 0.51 1.63 0.99 2.37a7.49 7.49 0 0 0 4.59 3.27m3.89 -0.11c0.22 -0.07 0.44 -0.14 0.66 -0.23a9.09 9.09 0 0 1 -0.27 0.6m-1.69 2.34a9 9 0 0 1 -12.71 -12.75"}],["path",{"d":"M3 3l18 18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbMoonOff;
