import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-plant-2-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbPlant2Off {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2 9c0 5.52 4.48 10 10 10a9.95 9.95 0 0 0 5.42 -1.59m2.14 -1.85a9.96 9.96 0 0 0 2.44 -6.55"}],["path",{"d":"M12 19c0 -1.99 0.58 -3.84 1.58 -5.4m1.88 -2.17a9.96 9.96 0 0 1 6.54 -2.44"}],["path",{"d":"M2 9a10 10 0 0 1 10 10"}],["path",{"d":"M12 4a9.7 9.7 0 0 1 3 7.01"}],["path",{"d":"M9.01 11.5a9.7 9.7 0 0 1 0.16 -2.32m1.08 -2.94a9.7 9.7 0 0 1 1.75 -2.24"}],["path",{"d":"M3 3l18 18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbPlant2Off;
