import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-diabolo",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbDiabolo {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 6a8 3 0 1 0 16 0a8 3 0 1 0 -16 0"}],["path",{"d":"M4 6v0.14a1 1 0 0 0 0.05 0.31l1.95 5.55l-1.96 5.67a1 1 0 0 0 -0.04 0.27v0.07c0 1.66 3.58 3 8 3s8 -1.34 8 -3v-0.06a1 1 0 0 0 -0.04 -0.26l-1.96 -5.67l1.95 -5.55a1 1 0 0 0 0.05 -0.31v-0.14"}],["path",{"d":"M6 12c0 1.11 2.69 2 6 2s6 -0.89 6 -2"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbDiabolo;
