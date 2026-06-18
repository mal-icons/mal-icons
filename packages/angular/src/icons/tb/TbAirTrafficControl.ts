import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-air-traffic-control",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbAirTrafficControl {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11 3h2"}],["path",{"d":"M12 3v3"}],["path",{"d":"M6 6h12a2 2 0 0 1 1.92 2.58l-1.8 6a2 2 0 0 1 -1.92 1.43h-8.4a2 2 0 0 1 -1.92 -1.42l-1.8 -6a2 2 0 0 1 1.92 -2.57"}],["path",{"d":"M8.5 6l1.5 10v5"}],["path",{"d":"M15.5 6l-1.5 10v5"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbAirTrafficControl;
