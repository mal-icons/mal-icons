import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-crutches",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbCrutches {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 5a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2"}],["path",{"d":"M11 21h2"}],["path",{"d":"M12 21v-4.09a3 3 0 0 1 0.5 -1.66l0.99 -1.49a3 3 0 0 0 0.5 -1.66v-5.09"}],["path",{"d":"M12 21v-4.09a3 3 0 0 0 -0.5 -1.66l-0.99 -1.49a3 3 0 0 1 -0.5 -1.66v-5.09"}],["path",{"d":"M10 11h4"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbCrutches;
