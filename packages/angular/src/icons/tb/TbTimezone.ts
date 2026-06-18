import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-timezone",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbTimezone {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20.88 10.55a9 9 0 1 0 -10.34 10.33"}],["path",{"d":"M3.6 9h16.8"}],["path",{"d":"M3.6 15h6.9"}],["path",{"d":"M11.5 3a17 17 0 0 0 -1.5 14.95"}],["path",{"d":"M12.5 3a17 17 0 0 1 2.52 7.6"}],["path",{"d":"M14 18a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"}],["path",{"d":"M18 16.5v1.5l0.5 0.5"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbTimezone;
