import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-summarize",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdSummarize {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15 3H5c-1.1 0-1.990.9-1.99 2L3 19c0 1.10.89 2 1.99 2H19c1.1 0 2-0.9 2-2V9l-6-6zM5 19V5h9v5h5v9H5zM9 8c0 0.55-0.45 1-1 1s-1-0.45-1-1 0.45-1 1-1 1 0.45 1 1zm0 4c0 0.55-0.45 1-1 1s-1-0.45-1-1 0.45-1 1-1 1 0.45 1 1zm0 4c0 0.55-0.45 1-1 1s-1-0.45-1-1 0.45-1 1-1 1 0.45 1 1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdSummarize;
