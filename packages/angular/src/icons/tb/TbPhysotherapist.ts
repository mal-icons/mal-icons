import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-physotherapist",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbPhysotherapist {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9 15l-1 -3l4 -2l4 1h3.5"}],["path",{"d":"M3 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M11 6a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M12 17v-7"}],["path",{"d":"M8 20h7l1 -4l4 -2"}],["path",{"d":"M18 20h3"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbPhysotherapist;
