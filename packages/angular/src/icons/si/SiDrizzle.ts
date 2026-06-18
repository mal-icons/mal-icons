import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-drizzle",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiDrizzle {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5.35 11.82a1.04 1.04 0 0 0-0.39-1.42 1.06 1.06 0 0 0-1.440.4L0.14 16.7a1.03 1.03 0 0 0 0.4 1.42 1.06 1.06 0 0 0 1.44-0.4l3.38-5.9Zm11.22 0a1.04 1.04 0 0 0-0.39-1.42 1.06 1.06 0 0 0-1.440.4l-3.38 5.9a1.04 1.04 0 0 0 0.39 1.42c0.510.28 1.150.1 1.44-0.4l3.38-5.9Zm7.29-4.53a1.04 1.04 0 0 0-0.39-1.42 1.06 1.06 0 0 0-1.440.4l-3.38 5.9a1.04 1.04 0 0 0 0.4 1.42 1.06 1.06 0 0 0 1.44-0.4l3.38-5.9Zm-11.22 0a1.03 1.03 0 0 0-0.39-1.42 1.06 1.06 0 0 0-1.440.4l-3.38 5.9a1.04 1.04 0 0 0 0.39 1.42c0.510.28 1.150.1 1.44-0.4l3.38-5.9Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiDrizzle;
