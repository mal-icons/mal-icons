import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-filter-2-cancel",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbFilter2Cancel {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 6h16"}],["path",{"d":"M6 12h12"}],["path",{"d":"M9 18h3"}],["path",{"d":"M17 21l4 -4m-5 2c0 0.8 0.32 1.56 0.88 2.12c0.56 0.56 1.33 0.88 2.12 0.88c0.8 0 1.56 -0.32 2.12 -0.88c0.56 -0.56 0.88 -1.33 0.88 -2.12c0 -0.8 -0.32 -1.56 -0.88 -2.12c-0.56 -0.56 -1.33 -0.88 -2.12 -0.88c-0.8 0 -1.56 0.32 -2.12 0.88c-0.56 0.56 -0.88 1.33 -0.88 2.12l1 2"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbFilter2Cancel;
