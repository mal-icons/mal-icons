import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-brand-onlyfans",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBrandOnlyfans {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8.5 6a6.5 6.5 0 1 0 0 13a6.5 6.5 0 0 0 0 -13"}],["path",{"d":"M8.5 15a2.5 2.5 0 1 1 0 -5a2.5 2.5 0 0 1 0 5"}],["path",{"d":"M14 16c2.5 0 6.42 -1.47 7 -4h-6c3 -1 6.44 -3.53 7 -6h-4c-3.03 0 -3.76 -0.2 -5 1.5"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBrandOnlyfans;
