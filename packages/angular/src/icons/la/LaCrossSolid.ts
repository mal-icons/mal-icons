import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-cross-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaCrossSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 13 3 L 13 9 L 7 9 L 7 15 L 13 15 L 13 29 L 19 29 L 19 15 L 25 15 L 25 9 L 19 9 L 19 3 Z M 15 5 L 17 5 L 17 11 L 23 11 L 23 13 L 17 13 L 17 27 L 15 27 L 15 13 L 9 13 L 9 11 L 15 11 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaCrossSolid;
