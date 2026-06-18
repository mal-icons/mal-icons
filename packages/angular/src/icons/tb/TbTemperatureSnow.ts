import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-temperature-snow",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbTemperatureSnow {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 1 0 -4 0v8.5"}],["path",{"d":"M4 9h4"}],["path",{"d":"M14.75 4l1 2h2.25"}],["path",{"d":"M17 4l-3 5l2 3"}],["path",{"d":"M20.25 10l-1.25 2l1.25 2"}],["path",{"d":"M22 12h-6l-2 3"}],["path",{"d":"M18 18h-2.25l-1 2"}],["path",{"d":"M17 20l-3 -5h-1"}],["path",{"d":"M12 9l2.09 0.01"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbTemperatureSnow;
