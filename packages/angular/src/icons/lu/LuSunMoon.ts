import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-sun-moon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuSunMoon {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 2v2"}],["path",{"d":"M14.84 16.39a6 6 0 1 1-7.22-7.22c0.62-0.150.970.660.72 1.25a4 4 0 0 0 5.26 5.26c0.59-0.25 1.40.09 1.250.72"}],["path",{"d":"M16 12a4 4 0 0 0-4-4"}],["path",{"d":"m19 5-1.26 1.26"}],["path",{"d":"M20 12h2"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuSunMoon;
