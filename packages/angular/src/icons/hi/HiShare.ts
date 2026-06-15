import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-hi-share",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class HiShare {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"stroke-linecap":"round","stroke-linejoin":"round","d":"M7.22 10.91a2.25 2.25 0 1 0 0 2.19m0-2.19c0.180.320.280.70.28 1.09s-0.10.77-0.28 1.09m0-2.19 9.57-5.31m-9.57 7.5 9.57 5.31m0 0a2.25 2.25 0 1 0 3.94 2.19 2.25 2.25 0 0 0-3.93-2.19Zm0-12.81a2.25 2.25 0 1 0 3.93-2.18 2.25 2.25 0 0 0-3.93 2.19Z"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":1.5};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default HiShare;
