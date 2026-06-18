import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-air-balloon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbAirBalloon {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9 21v-3h6v3a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1"}],["path",{"d":"M9 18c-2.35 -2.17 -5 -5.23 -5 -8a8 8 0 1 1 16 0c0 2.77 -2.65 5.83 -5 8"}],["path",{"d":"M5.5 14h13"}],["path",{"d":"M10 14c-1.69 -4.71 -0.92 -8.2 0 -11.6"}],["path",{"d":"M14 14c1.47 -3.87 1.19 -7.73 0 -11.6"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbAirBalloon;
