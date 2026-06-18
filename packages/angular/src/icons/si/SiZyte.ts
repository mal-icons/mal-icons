import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-zyte",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiZyte {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14.14 6.82v1.72h-1.22V9.92h1.22v2.6c0 1.620.94 2.49 2.36 2.490.24 0 0.56-0.020.79-0.08v-1.35c-0.150.04-0.310.05-0.470.05-0.71 0-1.2-0.33-1.2-1.14V9.92h1.68V8.53h-1.67V6.82ZM20.87 8.4c-1.85 0-3.3 1.44-3.3 3.3 0 1.91 1.45 3.36 3.32 3.36 1.57 0 2.79-0.89 3.02-2.24h-1.47c-0.130.55-0.750.92-1.530.92-1.03 0-1.69-0.59-1.87-1.53h4.91c0.03-0.120.04-0.440.04-0.62 0-1.87-1.4-3.19-3.13-3.19ZM0 8.53v1.4h3.93L0 13.53v1.4h5.72v-1.4h-3.94l3.94-3.6V8.53Zm6.04 0 2.54 6.06-1.15 2.59h1.57l3.61-8.65h-1.57l-1.71 4.36-1.72-4.36Zm14.76 1.19c0.88 0 1.490.51 1.62 1.24h-3.32c0.21-0.790.84-1.24 1.7-1.24z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiZyte;
