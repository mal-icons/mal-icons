import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-grading",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrGrading {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5 7h14c0.55 0 1 0.45 1 1s-0.45 1-1 1H5c-0.55 0-1-0.45-1-1s0.45-1 1-1zm0 6h14c0.55 0 1-0.45 1-1s-0.45-1-1-1H5c-0.55 0-1 0.45-1 1s0.45 1 1 1zm0 4h5c0.55 0 1-0.45 1-1s-0.45-1-1-1H5c-0.55 0-1 0.45-1 1s0.45 1 1 1zm0 4h5c0.55 0 1-0.45 1-1s-0.45-1-1-1H5c-0.55 0-1 0.45-1 1s0.45 1 1 1zm10.41-2.83-0.71-0.71a11 0 1 0-1.41 1.41l1.42 1.42c0.390.39 1.020.39 1.41 0l3.17-3.17a11 0 1 0-1.41-1.41l-2.47 2.46zM4 4c0 0.550.45 1 1 1h14c0.55 0 1-0.45 1-1s-0.45-1-1-1H5c-0.55 0-1 0.45-1 1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrGrading;
