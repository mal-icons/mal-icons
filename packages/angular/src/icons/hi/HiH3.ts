import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-hi-h3",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class HiH3 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"stroke-linecap":"round","stroke-linejoin":"round","d":"M20.91 14.63a4.52 4.52 0 0 1 0.74 3.6c-0.150.7-0.79 1.14-1.5 1.21a15.19 15.19 0 0 1-3.64-0.1m4.41-4.71a4.52 4.52 0 0 0 0.74-3.6c-0.15-0.7-0.79-1.14-1.5-1.21a15.19 15.19 0 0 0-3.640.1m4.41 4.71H18M2.24 4.49v7.5m0 0v7.5m0-7.5h10.5m0-7.5v7.5m0 0v7.5"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":1.5};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default HiH3;
