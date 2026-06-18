import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-cards",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbCards {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3.6 7.2l7.14 -3.11a0.96 0.96 0 0 1 1.27 0.53l4.92 11.9a1 1 0 0 1 -0.51 1.3l-7.14 3.11a0.96 0.96 0 0 1 -1.27 -0.53l-4.92 -11.9a1 1 0 0 1 0.51 -1.3l0 0"}],["path",{"d":"M15 4h1a1 1 0 0 1 1 1v3.5"}],["path",{"d":"M20 6c0.26 0.11 0.52 0.22 0.77 0.32a1 1 0 0 1 0.53 1.31l-2.3 5.37"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbCards;
