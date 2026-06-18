import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-car-fan",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbCarFan {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 12v-9l4.91 1.91a1.7 1.7 0 0 1 0.43 2.93l-5.34 4.16"}],["path",{"d":"M12 12h9l-1.91 4.91a1.7 1.7 0 0 1 -2.92 0.43l-4.16 -5.34"}],["path",{"d":"M12 12h-9l1.91 -4.91a1.7 1.7 0 0 1 2.93 -0.43l4.16 5.34"}],["path",{"d":"M12 12v9l-4.91 -1.91a1.7 1.7 0 0 1 -0.43 -2.92l5.34 -4.16"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbCarFan;
