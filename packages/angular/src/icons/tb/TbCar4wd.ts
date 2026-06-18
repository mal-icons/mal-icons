import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-car-4wd",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbCar4wd {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5 5a2 2 0 0 1 2 -2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2a2 2 0 0 1 -2 -2l0 -2"}],["path",{"d":"M5 17a2 2 0 0 1 2 -2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2a2 2 0 0 1 -2 -2l0 -2"}],["path",{"d":"M15 5a2 2 0 0 1 2 -2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2a2 2 0 0 1 -2 -2l0 -2"}],["path",{"d":"M15 17a2 2 0 0 1 2 -2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2a2 2 0 0 1 -2 -2l0 -2"}],["path",{"d":"M9 18h6"}],["path",{"d":"M9 6h6"}],["path",{"d":"M12 6.5v-0.5v12"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbCar4wd;
