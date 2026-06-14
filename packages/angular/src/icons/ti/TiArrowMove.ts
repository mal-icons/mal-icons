import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-arrow-move",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiArrowMove {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17.71 8.29c-0.39-0.39-1.02-0.39-1.41 0s-0.39 1.02 0 1.41l1.29 1.29h-4.59v-4.59l1.29 1.29c0.20.20.450.290.710.29s0.51-0.10.71-0.29c0.39-0.390.39-1.02 0-1.41l-3.71-3.71-3.71 3.71c-0.390.39-0.39 1.02 0 1.41s1.020.39 1.41 0l1.29-1.29v4.59h-4.59l1.29-1.29c0.39-0.390.39-1.02 0-1.41s-1.02-0.39-1.41 0l-3.71 3.71 3.71 3.71c0.20.20.450.290.710.29s0.51-0.10.71-0.29c0.39-0.390.39-1.02 0-1.41l-1.29-1.29h4.59v4.59l-1.29-1.29c-0.39-0.39-1.02-0.39-1.41 0s-0.39 1.02 0 1.41l3.71 3.71 3.71-3.71c0.39-0.390.39-1.02 0-1.41s-1.02-0.39-1.41 0l-1.29 1.29v-4.59h4.59l-1.29 1.29c-0.390.39-0.39 1.02 0 1.410.20.20.450.290.710.29s0.51-0.10.71-0.29l3.71-3.71-3.71-3.71z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiArrowMove;
