import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-world-heart",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbWorldHeart {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21 12a9 9 0 1 0 -9.68 8.97"}],["path",{"d":"M3.6 9h16.8"}],["path",{"d":"M3.6 15h6.9"}],["path",{"d":"M11.5 3a17 17 0 0 0 0 18"}],["path",{"d":"M12.5 3a16.98 16.98 0 0 1 2.56 8.14"}],["path",{"d":"M18 22l3.35 -3.28a2.14 2.14 0 0 0 0.01 -3.07a2.24 2.24 0 0 0 -3.13 -0.01l-0.22 0.22l-0.22 -0.22a2.24 2.24 0 0 0 -3.13 -0.01a2.14 2.14 0 0 0 -0.01 3.07l3.36 3.3"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbWorldHeart;
