import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-microscope-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbMicroscopeOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5 21h14"}],["path",{"d":"M6 18h2"}],["path",{"d":"M7 18v3"}],["path",{"d":"M10 10l-1 1l3 3l1 -1m2 -2l3 -3l-3 -3l-3 3"}],["path",{"d":"M10.5 12.5l-1.5 1.5"}],["path",{"d":"M17 3l3 3"}],["path",{"d":"M12 21a6 6 0 0 0 5.46 -3.5m0.44 -3.6a6 6 0 0 0 -2.18 -3.61"}],["path",{"d":"M3 3l18 18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbMicroscopeOff;
