import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-arrow-repeat",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiArrowRepeat {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16.5 7h-2.09l1.29-1.29c0.39-0.390.39-1.02 0-1.41s-1.02-0.39-1.41 0l-3.71 3.71 3.71 3.71c0.20.20.450.290.710.29s0.51-0.10.71-0.29c0.39-0.390.39-1.02 0-1.41l-1.29-1.29h2.09c1.38 0 2.5 1.35 2.5 3s-1.35 3-3 3c-0.55 0-1 0.45-1 1s0.45 1 1 1c2.76 0 5-2.24 5-5s-2.02-5-4.5-5zM8.29 12.29c-0.390.39-0.39 1.02 0 1.41l1.29 1.29h-2.09c-1.38 0-2.5-1.35-2.5-3s1.35-3 3-3c0.55 0 1-0.45 1-1s-0.45-1-1-1c-2.76 0-5 2.24-5 5s2.02 5 4.5 5h2.09l-1.29 1.29c-0.390.39-0.39 1.02 0 1.410.20.20.450.290.710.29s0.51-0.10.71-0.29l3.71-3.71-3.71-3.71c-0.39-0.39-1.02-0.39-1.41 0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiArrowRepeat;
