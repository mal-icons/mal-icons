import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-alphabet-arabic",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbAlphabetArabic {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10 6v4"}],["path",{"d":"M13 14h8q -2.52 -3 -4 -3"}],["path",{"d":"M13 6v9.96c0 0.96 0 1.44 -0.29 1.74s-0.76 0.3 -1.71 0.3h-1"}],["path",{"d":"M7 6v9.96c0 0.96 0 1.44 -0.29 1.74s-0.76 0.3 -1.71 0.3h-1"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbAlphabetArabic;
