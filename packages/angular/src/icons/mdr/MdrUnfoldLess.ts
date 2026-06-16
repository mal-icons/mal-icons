import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-unfold-less",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrUnfoldLess {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8.12 19.3c0.390.39 1.020.39 1.41 0L12 16.83l2.47 2.47a11 0 1 0 1.41-1.41l-3.17-3.17a11 0 0 0-1.41 0l-3.17 3.17c-0.40.38-0.4 1.02-0.01 1.41zm7.76-14.6a11 0 0 0-1.41 0L12 7.17 9.53 4.7a11 0 0 0-1.41 0c-0.390.39-0.39 1.03 0 1.42l3.17 3.17c0.390.39 1.020.39 1.41 0l3.17-3.17c0.4-0.390.4-1.030.01-1.42z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrUnfoldLess;
