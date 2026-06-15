import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-hi-cube-transparent",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class HiCubeTransparent {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"stroke-linecap":"round","stroke-linejoin":"round","d":"m21 7.5-2.25-1.31M21 7.5v2.25m0-2.25-2.25 1.31M3 7.5l2.25-1.31M3 7.5l2.25 1.31M3 7.5v2.25m9 3 2.25-1.31M12 12.75l-2.25-1.31M12 12.75V15m0 6.75 2.25-1.31M12 21.75V19.5m0 2.25-2.25-1.31m0-16.87L12 2.25l2.25 1.31M21 14.25v2.25l-2.25 1.31m-13.5 0L3 16.5v-2.25"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":1.5};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default HiCubeTransparent;
