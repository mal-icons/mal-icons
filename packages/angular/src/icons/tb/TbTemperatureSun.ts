import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-temperature-sun",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbTemperatureSun {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 1 0 -4 0v8.5"}],["path",{"d":"M4 9h4"}],["path",{"d":"M13 16a4 4 0 1 0 0 -8a4.07 4.07 0 0 0 -1 0.12"}],["path",{"d":"M13 3v1"}],["path",{"d":"M21 12h1"}],["path",{"d":"M13 20v1"}],["path",{"d":"M19.4 5.6l-0.7 0.7"}],["path",{"d":"M18.7 17.7l0.7 0.7"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbTemperatureSun;
