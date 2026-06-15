import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-hi-paint-brush",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class HiPaintBrush {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"stroke-linecap":"round","stroke-linejoin":"round","d":"M9.53 16.12a3 3 0 0 0-5.78 1.13 2.25 2.25 0 0 1-2.4 2.25 4.5 4.5 0 0 0 8.4-2.24c0-0.4-0.08-0.78-0.22-1.13Zm0 0a16 16 0 0 0 3.39-1.62m-5.04-0.02a15.99 15.99 0 0 1 1.62-3.39m3.42 3.42a16 16 0 0 0 4.76-4.65l3.88-5.81a1.15 1.15 0 0 0-1.6-1.6L14.15 6.32a16 16 0 0 0-4.65 4.76m3.42 3.42a6.78 6.78 0 0 0-3.42-3.42"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":1.5};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default HiPaintBrush;
