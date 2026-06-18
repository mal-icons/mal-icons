import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-th-list-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaThListSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 4 6 L 4 26 L 28 26 L 28 6 Z M 6 8 L 11 8 L 11 12 L 6 12 Z M 13 8 L 26 8 L 26 12 L 13 12 Z M 6 14 L 11 14 L 11 18 L 6 18 Z M 13 14 L 26 14 L 26 18 L 13 18 Z M 6 20 L 11 20 L 11 24 L 6 24 Z M 13 20 L 26 20 L 26 24 L 13 24 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaThListSolid;
