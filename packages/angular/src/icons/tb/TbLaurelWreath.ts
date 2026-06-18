import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-laurel-wreath",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbLaurelWreath {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6.44 8a8.6 8.6 0 0 0 -0.44 2.73c0 4.02 2.69 7.27 6 7.27s6 -3.26 6 -7.27a8.6 8.6 0 0 0 -0.44 -2.73"}],["path",{"d":"M14.5 21s-0.68 -3 -2.5 -3s-2.5 3 -2.5 3"}],["path",{"d":"M18.52 5.23c0.29 1.67 -1.02 2.77 -1.02 2.77s-1.6 -0.56 -1.89 -2.23c-0.29 -1.67 1.02 -2.77 1.02 -2.77s1.6 0.56 1.9 2.23"}],["path",{"d":"M21.09 12.14c-1.28 1.27 -3.02 0.76 -3.02 0.76s-0.45 -1.77 0.83 -3.04c1.28 -1.27 3.02 -0.76 3.02 -0.76s0.45 1.77 -0.83 3.04"}],["path",{"d":"M17.73 18.83c-1.5 -0.57 -1.73 -2.19 -1.73 -2.19s1.27 -1.04 2.77 -0.46c1.5 0.57 1.73 2.19 1.73 2.19s-1.27 1.04 -2.77 0.46"}],["path",{"d":"M6.27 18.83c1.5 -0.57 1.73 -2.19 1.73 -2.19s-1.27 -1.04 -2.77 -0.46c-1.5 0.57 -1.73 2.19 -1.73 2.19s1.27 1.04 2.77 0.46"}],["path",{"d":"M2.91 12.14c1.28 1.27 3.02 0.76 3.02 0.76s0.45 -1.77 -0.83 -3.04c-1.28 -1.26 -3.02 -0.76 -3.02 -0.76s-0.45 1.77 0.83 3.04"}],["path",{"d":"M5.48 5.23c-0.29 1.67 1.02 2.77 1.02 2.77s1.6 -0.56 1.9 -2.23c0.29 -1.67 -1.02 -2.77 -1.02 -2.77s-1.6 0.56 -1.89 2.23"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbLaurelWreath;
