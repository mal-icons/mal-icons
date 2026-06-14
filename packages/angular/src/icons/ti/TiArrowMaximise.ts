import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-arrow-maximise",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiArrowMaximise {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15 4c-0.55 0-1 0.45-1 1s0.45 1 1 1h1.59l-3.29 3.29c-0.390.39-0.39 1.02 0 1.410.20.20.450.290.710.29s0.51-0.10.71-0.29l3.29-3.29v1.59c0 0.550.45 1 1 1s1-0.45 1-1v-5h-5zM9.29 13.29l-3.29 3.29v-1.59c0-0.55-0.45-1-1-1s-1 0.45-1 1v5h1l40c0.55 0 1-0.45 1-1s-0.45-1-1-1h-1.59l3.29-3.29c0.39-0.390.39-1.02 0-1.41s-1.02-0.39-1.410zM7 12c0.55 0 1-0.45 1-1v-3h3c0.55 0 1-0.45 1-1s-0.45-1-1-1h-5l0 5c0 0.550.45 1 1 1zM17 12c-0.55 0-1 0.45-1 1v3h-3c-0.55 0-1 0.45-1 1s0.45 1 1 1h5v-5c0-0.55-0.45-1-1-1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiArrowMaximise;
