import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-globe-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuGlobeOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10.11 4.46A14.5 14.5 0 0 1 12 2a10 10 0 0 1 9.31 13.64"}],["path",{"d":"M15.56 15.56A14.5 14.5 0 0 1 12 22 10 10 0 0 1 4.93 4.93"}],["path",{"d":"M15.89 10.23A14.5 14.5 0 0 0 12 2a10 10 0 0 0-3.640.69"}],["path",{"d":"M17.66 12H22"}],["path",{"d":"M19.07 19.07A10 10 0 0 1 12 22 14.5 14.5 0 0 1 8.44 8.45"}],["path",{"d":"M2 12h10"}],["path",{"d":"m2 2 20 20"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuGlobeOff;
