import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-panorama-horizontal-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbPanoramaHorizontalOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10.95 6.95c2.9 0.15 5.8 -0.32 8.71 -1.42a1 1 0 0 1 1.35 0.93v10.53m-3.21 0.81c-4.48 -1.28 -8.97 -1.07 -13.45 0.62a0.99 0.99 0 0 1 -1.34 -0.93v-11.03a1 1 0 0 1 1.34 -0.93c0.59 0.22 1.18 0.42 1.76 0.59"}],["path",{"d":"M3 3l18 18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbPanoramaHorizontalOff;
