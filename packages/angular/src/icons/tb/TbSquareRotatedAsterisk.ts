import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-square-rotated-asterisk",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbSquareRotatedAsterisk {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13.45 2.6l7.96 7.95a2.05 2.05 0 0 1 0 2.89l-7.95 7.96a2.05 2.05 0 0 1 -2.89 0l-7.95 -7.95a2.05 2.05 0 0 1 0 -2.89l7.96 -7.95a2.05 2.05 0 0 1 2.89 0"}],["path",{"d":"M12 8.5v7"}],["path",{"d":"M9 10l6 4"}],["path",{"d":"M9 14l6 -4"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbSquareRotatedAsterisk;
