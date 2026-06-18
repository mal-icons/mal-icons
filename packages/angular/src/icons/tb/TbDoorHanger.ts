import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-door-hanger",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbDoorHanger {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 3a7 7 0 0 0 -5.48 2.64a1 1 0 0 0 0.31 1.49l1.76 1a1 1 0 0 0 1.22 -0.13a3 3 0 0 1 2.82 -0.88a3.09 3.09 0 0 1 2.37 3.01v0.87l-9.2 1.84a1 1 0 0 0 -0.8 1v6.16a1 1 0 0 0 1 1h12a1 1 0 0 0 1 -1v-9.72a7.18 7.18 0 0 0 -7 -7.28"}],["path",{"d":"M12 17v0.01"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbDoorHanger;
