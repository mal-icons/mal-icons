import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-intercom",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiIntercom {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21 0H3C1.34 0 0 1.34 0 3v18c0 1.66 1.34 3 3 3h18c1.66 0 3-1.34 3-3V3c0-1.66-1.34-3-3-3zm-5.8 4.4c0-0.440.36-0.80.8-0.80.44 0 0.80.360.80.8v10.69c0 0.44-0.360.8-0.80.8-0.44 0-0.8-0.36-0.8-0.8V4.4zM11.2 3.99c0-0.440.36-0.80.8-0.8s0.80.360.80.8v11.6c0 0.44-0.360.8-0.80.8s-0.8-0.36-0.8-0.8V3.99zm-4 0.41c0-0.440.36-0.80.8-0.80.44 0 0.80.360.80.8v10.69c0 0.44-0.360.8-0.80.8-0.44 0-0.8-0.36-0.8-0.8V4.4zM3.2 6c0-0.440.36-0.80.8-0.80.44 0 0.80.360.80.8v7.2c0 0.44-0.360.8-0.80.8-0.44 0-0.8-0.36-0.8-0.8V6zM20.52 18.2c-0.120.11-3.09 2.59-8.52 2.59-5.43 0-8.4-2.49-8.52-2.59-0.33-0.29-0.37-0.79-0.09-1.130.28-0.330.79-0.37 1.13-0.090.050.04 2.69 2.21 7.48 2.21 4.85 0 7.46-2.19 7.48-2.210.33-0.290.84-0.25 1.130.090.290.340.250.84-0.09 1.13zm0.28-5.01c0 0.44-0.360.8-0.80.8-0.44 0-0.8-0.36-0.8-0.8V6c0-0.440.36-0.80.8-0.80.44 0 0.80.360.80.8v7.2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiIntercom;
