import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-sun-wind",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbSunWind {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14.47 10a4 4 0 1 0 -5.47 5.46"}],["path",{"d":"M2 12h1"}],["path",{"d":"M11 3v1"}],["path",{"d":"M11 20v1"}],["path",{"d":"M4.6 5.6l0.7 0.7"}],["path",{"d":"M17.4 5.6l-0.7 0.7"}],["path",{"d":"M5.3 17.7l-0.7 0.7"}],["path",{"d":"M15 13h5a2 2 0 1 0 0 -4"}],["path",{"d":"M12 16h5.71l0.25 0a2 2 0 0 1 2.03 2a2 2 0 0 1 -2 2h-0.29"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbSunWind;
