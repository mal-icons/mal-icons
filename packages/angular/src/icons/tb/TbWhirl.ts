import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-whirl",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbWhirl {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0"}],["path",{"d":"M12 21c-3.31 0 -6 -2.46 -6 -5.5s2.69 -5.5 6 -5.5"}],["path",{"d":"M21 12c0 3.31 -2.46 6 -5.5 6s-5.5 -2.69 -5.5 -6"}],["path",{"d":"M12 14c3.31 0 6 -2.46 6 -5.5s-2.69 -5.5 -6 -5.5"}],["path",{"d":"M14 12c0 -3.31 -2.46 -6 -5.5 -6s-5.5 2.69 -5.5 6"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbWhirl;
