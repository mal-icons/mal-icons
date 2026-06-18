import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-sun-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbSunOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 3l18 18"}],["path",{"d":"M16 12a4 4 0 0 0 -4 -4m-2.83 1.18a4 4 0 0 0 5.66 5.65"}],["path",{"d":"M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l0.7 0.7m12.1 -0.7l-0.7 0.7m0 11.4l0.7 0.7m-12.1 -0.7l-0.7 0.7"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbSunOff;
