import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-car-battery-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaCarBatterySolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 8 6 L 8 8 L 12 8 L 12 6 Z M 20 6 L 20 8 L 24 8 L 24 6 Z M 4 9 L 4 27 L 28 27 L 28 9 Z M 6 11 L 26 11 L 26 25 L 6 25 Z M 20 15 L 20 17 L 18 17 L 18 19 L 20 19 L 20 21 L 22 21 L 22 19 L 24 19 L 24 17 L 22 17 L 22 15 Z M 8 17 L 8 19 L 14 19 L 14 17 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaCarBatterySolid;
