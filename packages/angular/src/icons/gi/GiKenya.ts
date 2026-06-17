import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-kenya",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiKenya {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M410.7 119.7v182.1l27.4 25.9-105.9 154.6-73.9-41.8-5.4-39.7L74.66 296.4l36.64-29L62.47 253l50.33-78.4-0.8-61.8-47.25-60.96 38.15-19.05 99-3.05S307.1 83.8 310.1 83.09c3.1-0.81 91.5-36.58 91.5-36.58l47.9 23.61z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiKenya;
