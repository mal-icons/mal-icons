import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-outdent-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaOutdentSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 3 7 L 3 9 L 16 9 L 16 7 Z M 3 11 L 3 13 L 23 13 L 23 11 Z M 25 11 L 25 21 L 30 16 Z M 3 15 L 3 17 L 23 17 L 23 15 Z M 3 19 L 3 21 L 23 21 L 23 19 Z M 3 23 L 3 25 L 16 25 L 16 23 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaOutdentSolid;
