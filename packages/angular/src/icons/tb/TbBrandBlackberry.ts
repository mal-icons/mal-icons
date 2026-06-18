import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-brand-blackberry",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBrandBlackberry {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7 6a1 1 0 0 0 -1 -1h-2l-0.5 2h2.5a1 1 0 0 0 1 -1"}],["path",{"d":"M6 12a1 1 0 0 0 -1 -1h-2l-0.5 2h2.5a1 1 0 0 0 1 -1"}],["path",{"d":"M13 12a1 1 0 0 0 -1 -1h-2l-0.5 2h2.5a1 1 0 0 0 1 -1"}],["path",{"d":"M14 6a1 1 0 0 0 -1 -1h-2l-0.5 2h2.5a1 1 0 0 0 1 -1"}],["path",{"d":"M12 18a1 1 0 0 0 -1 -1h-2l-0.5 2h2.5a1 1 0 0 0 1 -1"}],["path",{"d":"M20 15a1 1 0 0 0 -1 -1h-2l-0.5 2h2.5a1 1 0 0 0 1 -1"}],["path",{"d":"M21 9a1 1 0 0 0 -1 -1h-2l-0.5 2h2.5a1 1 0 0 0 1 -1"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBrandBlackberry;
