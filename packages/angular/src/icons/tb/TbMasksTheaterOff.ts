import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-masks-theater-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbMasksTheaterOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13 9c0.06 0 0.13 0 0.19 0h6.62a2 2 0 0 1 1.99 2.18l-0.55 6.04m-1.29 2.72a3.99 3.99 0 0 1 -2.71 1.06h-1.5a4 4 0 0 1 -3.98 -3.63l-0.57 -6.18"}],["path",{"d":"M18 13h0.01"}],["path",{"d":"M15 16.5c0.66 0.44 1.31 0.59 1.97 0.45"}],["path",{"d":"M8.63 15.98a4.05 4.05 0 0 1 -0.38 0.02h-1.5a4 4 0 0 1 -3.98 -3.63l-0.57 -6.18a2 2 0 0 1 0.51 -1.53a1.99 1.99 0 0 1 1.29 -0.65m4 0h2.81a2 2 0 0 1 2 2"}],["path",{"d":"M6 8h0.01"}],["path",{"d":"M6 12c0.76 -0.51 1.53 -0.63 2.29 -0.36"}],["path",{"d":"M3 3l18 18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbMasksTheaterOff;
