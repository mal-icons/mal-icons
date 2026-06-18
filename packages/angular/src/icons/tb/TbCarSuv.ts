import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-car-suv",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbCarSuv {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5 17a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M16 17a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M5 9l2 -4h7.44a2 2 0 0 1 1.94 1.52l0.62 2.49h3a2 2 0 0 1 2 2v3"}],["path",{"d":"M10 9v-4"}],["path",{"d":"M2 7v4"}],["path",{"d":"M22 14a4.99 4.99 0 0 0 -4 -2a4.99 4.99 0 0 0 -4 2h-3a5 5 0 0 0 -8 0"}],["path",{"d":"M5 12v-3h13"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbCarSuv;
