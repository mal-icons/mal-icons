import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-table-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaTableSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 5 5 L 5 27 L 27 27 L 27 5 Z M 7 7 L 12 7 L 12 12 L 7 12 Z M 14 7 L 18 7 L 18 12 L 14 12 Z M 20 7 L 25 7 L 25 12 L 20 12 Z M 7 14 L 12 14 L 12 18 L 7 18 Z M 14 14 L 18 14 L 18 18 L 14 18 Z M 20 14 L 25 14 L 25 18 L 20 18 Z M 7 20 L 12 20 L 12 25 L 7 25 Z M 14 20 L 18 20 L 18 25 L 14 25 Z M 20 20 L 25 20 L 25 25 L 20 25 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaTableSolid;
