import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-wash-temperature-1",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbWashTemperature1 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 6l1.72 10.33a2 2 0 0 0 1.97 1.67h10.61a2 2 0 0 0 1.97 -1.67l1.72 -10.33"}],["path",{"d":"M3.49 8.97c0.17 0.02 0.34 0.03 0.51 0.04c0.79 0.01 1.54 -0.18 2 -0.5c0.46 -0.32 1.21 -0.51 2 -0.5c0.79 -0.01 1.54 0.18 2 0.5c0.46 0.32 1.21 0.51 2 0.5c0.79 0.01 1.54 -0.18 2 -0.5c0.46 -0.32 1.21 -0.51 2 -0.5c0.79 -0.01 1.54 0.18 2 0.5c0.46 0.32 1.21 0.51 2 0.5c0.17 0 0.34 -0.01 0.5 -0.03"}],["path",{"d":"M12 13h0.01"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbWashTemperature1;
