import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-brand-sugarizer",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBrandSugarizer {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14.28 16l3.25 -3.25a1.61 1.61 0 0 0 -2.28 -2.28l-3.25 3.25l-3.25 -3.25a1.61 1.61 0 0 0 -2.28 2.28l3.25 3.25l-3.25 3.25a1.61 1.61 0 1 0 2.28 2.28l3.25 -3.25l3.25 3.25a1.61 1.61 0 1 0 2.28 -2.28l-3.25 -3.25"}],["path",{"d":"M9 5a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBrandSugarizer;
