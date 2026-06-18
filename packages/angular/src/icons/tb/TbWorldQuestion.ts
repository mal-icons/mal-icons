import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-world-question",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbWorldQuestion {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20.98 11.33a9 9 0 1 0 -5.67 9.04"}],["path",{"d":"M3.6 9h16.8"}],["path",{"d":"M3.6 15h9.9"}],["path",{"d":"M11.5 3a17 17 0 0 0 0 18"}],["path",{"d":"M12.5 3a16.99 16.99 0 0 1 2.57 9.52m-1.06 5.4a17 17 0 0 1 -1.51 3.08"}],["path",{"d":"M19 22v0.01"}],["path",{"d":"M19 19a2 2 0 0 0 0.91 -3.78a1.98 1.98 0 0 0 -2.41 0.48"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbWorldQuestion;
