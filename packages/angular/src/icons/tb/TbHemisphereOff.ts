import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-hemisphere-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbHemisphereOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6.59 6.6c-2.18 0.55 -3.59 1.42 -3.59 2.4c0 1.66 4.03 3 9 3m3.72 -0.27c3.11 -0.47 5.28 -1.52 5.28 -2.73c0 -1.66 -4.03 -3 -9 -3c-0.66 0 -1.31 0.02 -1.93 0.07"}],["path",{"d":"M3 9a9 9 0 0 0 13.68 7.69m2.17 -1.84a8.97 8.97 0 0 0 2.16 -5.85"}],["path",{"d":"M3 3l18 18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbHemisphereOff;
