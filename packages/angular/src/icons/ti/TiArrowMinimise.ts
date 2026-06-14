import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-arrow-minimise",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiArrowMinimise {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6.12 13c-0.55 0-1 0.45-1 1s0.45 1 1 1h1.47l-3.29 3.29c-0.390.39-0.39 1.02 0 1.410.20.20.450.290.710.29s0.51-0.10.71-0.29l3.41-3.41v1.71c0 0.550.45 1 1 1s0.88-0.450.88-1v-5h-4.88zM7 11c0.55 0 1-0.45 1-1v-2h2c0.55 0 1-0.45 1-1s-0.45-1-1-1h-4l0 4c0 0.550.45 1 1 1zM17 13c-0.55 0-1 0.45-1 1v2h-2c-0.55 0-1 0.45-1 1s0.45 1 1 1h4v-4c0-0.55-0.45-1-1-1zM18.29 4.29l-3.29 3.29v-1.59c0-0.55-0.45-1-1-1s-1 0.45-1 1v5h5c0.55 0 1-0.45 1-1s-0.45-1-1-1h-1.59l3.29-3.29c0.39-0.390.39-1.02 0-1.41s-1.02-0.39-1.410z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiArrowMinimise;
