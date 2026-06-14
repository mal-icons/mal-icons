import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-satellite",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuSatellite {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m13.5 6.5-3.15-3.15a1.21 1.21 0 0 0-1.7 0L6.35 5.65a1.21 1.21 0 0 0 0 1.7L9.5 10.5"}],["path",{"d":"M16.5 7.5 19 5"}],["path",{"d":"m17.5 10.5 3.15 3.15a1.21 1.21 0 0 1 0 1.7l-2.3 2.3a1.21 1.21 0 0 1-1.7 0L13.5 14.5"}],["path",{"d":"M9 21a6 6 0 0 0-6-6"}],["path",{"d":"M9.35 10.65a1.21 1.21 0 0 0 0 1.7l2.3 2.3a1.21 1.21 0 0 0 1.7 0l4.3-4.3a1.21 1.21 0 0 0 0-1.7l-2.3-2.3a1.21 1.21 0 0 0-1.7 0z"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuSatellite;
