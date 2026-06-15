import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-hi-ellipsis-horizontal-circle",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class HiEllipsisHorizontalCircle {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"stroke-linecap":"round","stroke-linejoin":"round","d":"M8.63 12a0.380.38 0 1 1-0.75 0 0.380.38 0 0 1 0.75 0Zm0 0H8.25m4.13 0a0.380.38 0 1 1-0.75 0 0.380.38 0 0 1 0.75 0Zm0 0H12m4.13 0a0.380.38 0 1 1-0.75 0 0.380.38 0 0 1 0.75 0Zm0 0h-0.37M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":1.5};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default HiEllipsisHorizontalCircle;
