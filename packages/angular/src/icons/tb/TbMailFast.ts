import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-mail-fast",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbMailFast {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 7h3"}],["path",{"d":"M3 11h2"}],["path",{"d":"M9.02 8.8l-0.6 6a2 2 0 0 0 1.99 2.2h7.98a2 2 0 0 0 1.99 -1.8l0.6 -6a2 2 0 0 0 -1.99 -2.2h-7.98a2 2 0 0 0 -1.99 1.8"}],["path",{"d":"M9.8 7.5l2.98 3.28a3 3 0 0 0 4.24 0.2l3.28 -2.98"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbMailFast;
