import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-sun-moon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbSunMoon {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9.17 14.83a4 4 0 1 1 5.66 -5.66"}],["path",{"d":"M11.29 12.71l0.17 0.25a7.5 7.5 0 0 0 8.85 2.49a9 9 0 0 1 -14.67 2.91"}],["path",{"d":"M3 12h1"}],["path",{"d":"M12 3v1"}],["path",{"d":"M5.6 5.6l0.7 0.7"}],["path",{"d":"M3 21l18 -18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbSunMoon;
