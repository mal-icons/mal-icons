import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-bat",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBat {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17 16c0.74 -2.29 2.78 -3.76 5 -3c-0.17 -2.59 0.13 -5.31 -2 -7.5c-1.71 2.65 -3.36 2.56 -5 2.5v-4l-3 2l-3 -2v4c-1.64 0.06 -3.29 0.15 -5 -2.5c-2.13 2.19 -1.83 4.91 -2 7.5c2.22 -0.76 4.26 0.71 5 3c2.59 0 3.89 0.95 5 4c1.11 -3.05 2.41 -4 5 -4"}],["path",{"d":"M9 8a3 3 0 0 0 6 0"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBat;
