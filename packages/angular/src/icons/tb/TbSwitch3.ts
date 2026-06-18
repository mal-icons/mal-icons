import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-switch-3",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbSwitch3 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 17h2.4a5 5 0 0 0 4.1 -2.13l0.18 -0.25m3.66 -5.23l0.18 -0.25a5 5 0 0 1 4.1 -2.13h3.4"}],["path",{"d":"M18 4l3 3l-3 3"}],["path",{"d":"M3 7h2.4a5 5 0 0 1 4.1 2.13l4.01 5.73a5 5 0 0 0 4.1 2.13h3.4"}],["path",{"d":"M18 20l3 -3l-3 -3"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbSwitch3;
