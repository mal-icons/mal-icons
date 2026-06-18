import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-hashtag-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaHashtagSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 11 5 L 11 11 L 5 11 L 5 13 L 11 13 L 11 19 L 5 19 L 5 21 L 11 21 L 11 27 L 13 27 L 13 21 L 19 21 L 19 27 L 21 27 L 21 21 L 27 21 L 27 19 L 21 19 L 21 13 L 27 13 L 27 11 L 21 11 L 21 5 L 19 5 L 19 11 L 13 11 L 13 5 Z M 13 13 L 19 13 L 19 19 L 13 19 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaHashtagSolid;
