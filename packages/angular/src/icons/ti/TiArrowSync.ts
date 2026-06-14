import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-arrow-sync",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiArrowSync {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19.5 12.47c0-1.95-0.62-3.4-2.07-4.84-0.39-0.39-1.02-0.39-1.41 0-0.390.39-0.39 1.02 0 1.42 1.08 1.08 1.48 2.01 1.48 3.43 0 1.47-0.57 2.85-1.61 3.89-1 1-2.08 1.5-3.43 1.59l1.25-1.25c0.39-0.390.39-1.02 0-1.41s-1.02-0.39-1.41 0l-3.71 3.71 3.71 3.71c0.20.20.450.290.710.29s0.51-0.10.71-0.29c0.39-0.390.39-1.02 0-1.41l-1.34-1.34c1.92-0.08 3.54-0.79 4.93-2.18 1.42-1.42 2.2-3.3 2.2-5.3zM6.5 12.5c0-1.470.57-2.85 1.61-3.89 1.01-1.01 2.09-1.51 3.46-1.59l-1.27 1.27c-0.390.39-0.39 1.02 0 1.410.20.20.450.290.710.29s0.51-0.10.71-0.29l3.71-3.71-3.71-3.71c-0.39-0.39-1.02-0.39-1.41 0s-0.39 1.02 0 1.41l1.31 1.31c-1.910.09-3.520.8-4.91 2.18-1.42 1.42-2.2 3.3-2.2 5.3 0 1.950.62 3.4 2.07 4.840.20.20.450.290.710.29s0.51-0.10.71-0.29c0.39-0.390.39-1.02 0-1.41-1.08-1.08-1.48-2.01-1.48-3.43z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiArrowSync;
