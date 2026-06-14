import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-arrow-right",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiArrowRight {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13.29 7.29c-0.390.39-0.39 1.02 0 1.41l2.29 2.29h-7.59c-0.55 0-1 0.45-1 1s0.45 1 1 1h7.59l-2.29 2.29c-0.390.39-0.39 1.02 0 1.410.20.20.450.290.710.29s0.51-0.10.71-0.29l4.71-4.71-4.71-4.71c-0.39-0.39-1.02-0.39-1.41 0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiArrowRight;
