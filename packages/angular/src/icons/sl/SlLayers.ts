import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-sl-layers",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SlLayers {
  readonly viewBox = "0 0 1024 1024";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21.84 301.81l475.09 258.72a32.09 32.09 0 0 0 15.31 3.9 31.99 31.99 0 0 0 15.18-3.84l480.1-258.72c10.46-5.63 16.98-16.62 16.82-28.53a32.09 32.09 0 0 0-17.5-28.16L531.71 3.9c-9.05-4.59-19.74-4.62-28.88-0.06L22.79 245.12c-10.62 5.34-17.44 16.16-17.63 28.06s6.26 22.94 16.69 28.62zM517.15 68.29l406.16 206.27L512.34 496.03 106.16 274.85zm484.19 412.03l-94.97-48.22-68.56 36.98 80 40.62-410.96 221.46-406.19-221.18 85.31-42.88-68.37-37.25-100.32 50.4c-10.62 5.34-17.44 16.16-17.63 28.07s6.26 22.94 16.69 28.62l475.09 258.72a32.09 32.09 0 0 0 15.31 3.9 31.99 31.99 0 0 0 15.18-3.84l480.1-258.72c10.46-5.63 16.98-16.62 16.82-28.53a32 32 0 0 0-17.49-28.14zm0.01 224l-89.97-44.22-68.56 36.98 75.01 36.62-410.98 221.46-406.19-221.18 79.31-35.87-68.37-37.25-94.32 43.41C6.66 709.6-0.15 720.41-0.35 732.32s6.26 22.94 16.69 28.62l475.09 258.72a32.09 32.09 0 0 0 15.31 3.9 31.99 31.99 0 0 0 15.18-3.84l480.1-258.72c10.46-5.63 16.98-16.62 16.82-28.53a32 32 0 0 0-17.49-28.16z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SlLayers;
