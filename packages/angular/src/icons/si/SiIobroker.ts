import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-iobroker",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiIobroker {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 0c-0.61 0-1.20.04-1.790.13v3.29a8.94 8.94 0 13.570V0.14A11.83 11.83 0 12 0zM9.380.3C4.08 1.50.13 6.280.13 12 0.13 18.63 5.44 24 12 24s11.87-5.37 11.87-12c0-5.72-3.95-10.5-9.25-11.7v3.34c3.58 1.11 6.18 4.44 6.18 8.37 0 4.83-3.95 8.76-8.8 8.76-4.85 0-8.8-3.93-8.8-8.76 0-3.92 2.61-7.25 6.18-8.36V0.3zM12 4.14c-0.62 0-1.210.07-1.780.2V19.53A7.89 7.89 0 12 19.73c0.62 0 1.21-0.07 1.79-0.2V4.34A7.65 7.65 0 12 4.14Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiIobroker;
