import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-camera-outline",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiCameraOutline {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19 20h-14c-1.65 0-3-1.35-3-3v-8c0-1.65 1.35-3 3-3h1.59l1-1c0.58-0.58 1.6-1 2.41-1h4c0.82 0 1.840.42 2.41 1l1 1h1.59c1.65 0 3 1.35 3 3v8c0 1.65-1.35 3-3 3zm-14-12c-0.55 0-1 0.45-1 1v8c0 0.550.45 1 1 1h14c0.55 0 1-0.45 1-1v-8c0-0.55-0.45-1-1-1h-2c-0.27 0-0.52-0.1-0.71-0.29l-1.29-1.29c-0.2-0.2-0.71-0.41-1-0.41h-4c-0.28 0-0.80.21-1 0.41l-1.29 1.29c-0.190.19-0.440.29-0.710.29h-2zM12 10c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5m0-1c-1.93 0-3.5 1.57-3.5 3.5 0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5c0-1.93-1.57-3.5-3.5-3.5zM18 8.7c-0.72 0-1.30.58-1.3 1.3s0.58 1.3 1.3 1.3 1.3-0.58 1.3-1.3-0.58-1.3-1.3-1.3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiCameraOutline;
