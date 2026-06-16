import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-loyalty",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssLoyalty {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m524-262 140-140q11-11 16-24.4 5-13.4 5-28.6 0-31.93-22.54-54.46Q639.93-532 608-532q-20.36 0-40.18 13Q548-506 524-477q-24-29-44-42t-40-13q-31.93 0-54.46 22.54Q363-486.93 363-455q0 15.19 5 28.6Q373-413 384-402l140 140Zm-8 208L80-489v-391h393l435 434L516-54Zm0-86 304-304-375.65-376H140v303.88L516-140ZM245-664q21 0 36.5-15.5T297-716q0-21-15.5-36.5T245-768q-21 0-36.5 15.5T193-716q0 21 15.5 36.5T245-664ZM140-820Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssLoyalty;
