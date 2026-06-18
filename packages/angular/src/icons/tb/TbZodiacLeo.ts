import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-zodiac-leo",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbZodiacLeo {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13 17a4 4 0 1 0 8 0"}],["path",{"d":"M3 16a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M7 7a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"}],["path",{"d":"M7 7c0 3 2 5 2 9"}],["path",{"d":"M15 7c0 4 -2 6 -2 10"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbZodiacLeo;
