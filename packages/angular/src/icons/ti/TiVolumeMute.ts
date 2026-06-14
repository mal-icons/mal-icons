import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-volume-mute",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiVolumeMute {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19.71 5.29c-0.39-0.39-1.02-0.39-1.41 0l-1.55 1.55c-0.34-0.69-0.99-1.02-1.6-1.02-0.45 0-0.90.15-1.360.45l-2.67 1.78c-0.750.5-2.210.94-3.110.94-1.65 0-3 1.35-3 3v2c0 1.240.75 2.3 1.83 2.76l-1.53 1.53c-0.390.39-0.39 1.02 0 1.410.20.20.450.290.710.29s0.51-0.10.71-0.29l2.53-2.53c0.70.17 1.420.46 1.880.76l2.67 1.78c0.450.30.910.45 1.360.450.9 0 1.86-0.68 1.86-2.18v-8.59l2.71-2.71c0.39-0.390.39-1.02 0-1.41zm-4.82 2.65l0.1-0.060.010.12v1.29l-2 2v-2.09l1.89-1.26zm-7.89 4.06c0-0.550.45-1 1-1 1.21 0 2.91-0.49 4-1.15v2.44l-2.83 2.83c-0.41-0.08-0.81-0.12-1.17-0.12-0.55 0-1-0.45-1-1v-2zm3.3 3.41l1.7-1.7v2.44c-0.48-0.29-1.07-0.54-1.7-0.74zm4.69 2.71l-0.1-0.06-1.89-1.26v-4.09l2-2v7.29l-0.010.12z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiVolumeMute;
