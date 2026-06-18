import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-zeppelin-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbZeppelinOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15.77 15.78c-0.72 0.14 -1.49 0.22 -2.27 0.22c-2.13 0 -4.58 -0.93 -7.36 -2.78l-2.14 1.78v-3.33a46.07 46.07 0 0 1 -2 -1.67a46.07 46.07 0 0 1 2 -1.67v-3.33l2.13 1.78c0.13 -0.09 0.26 -0.17 0.39 -0.26m2.56 -1.42c1.6 -0.73 3.07 -1.1 4.41 -1.1c4.69 0 8.5 2.69 8.5 6c0 1.92 -1.28 3.63 -3.26 4.72"}],["path",{"d":"M10 15.5v4.5h6v-4"}],["path",{"d":"M3 3l18 18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbZeppelinOff;
