import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-hi-check-badge",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class HiCheckBadge {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"stroke-linecap":"round","stroke-linejoin":"round","d":"M9 12.75 11.25 15 15 9.75M21 12c0 1.27-0.63 2.39-1.59 3.07a3.75 3.75 0 0 1-1.04 3.3 3.75 3.75 0 0 1-3.3 1.04A3.75 3.75 0 0 1 12 21c-1.27 0-2.39-0.63-3.07-1.59a3.75 3.75 0 0 1-3.3-1.04 3.75 3.75 0 0 1-1.04-3.3A3.75 3.75 0 0 1 3 12c0-1.270.63-2.39 1.59-3.07a3.75 3.75 0 0 1 1.04-3.3 3.75 3.75 0 0 1 3.3-1.04A3.75 3.75 0 0 1 12 3c1.27 0 2.390.63 3.07 1.59a3.75 3.75 0 0 1 3.3 1.04 3.75 3.75 0 0 1 1.04 3.3A3.75 3.75 0 0 1 21 12Z"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":1.5};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default HiCheckBadge;
