import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-hackster",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiHackster {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19.09 13.29c-0.060.05-0.250.09-0.40.13l-4.78 1.31c-0.150.04-0.27-0.05-0.27-0.21V13.29a0.280.28 0 0-0.28-0.28H8.12a0.280.28 0 1-0.28-0.28V11.29a0.280.28 0 0-0.28-0.28H5.04c-0.1 0-0.18-0.08-0.18-0.18 0-0.060.03-0.10.06-0.130.06-0.050.25-0.090.4-0.13l4.76-1.3c0.15-0.040.270.050.270.21v1.25c0 0.160.130.280.280.28h5.24c0.16 0 0.280.130.280.28v1.42c0 0.160.130.280.280.28h2.54a0.180.18 0 1.180.180.160.16 0 1-0.060.12m-2.95 2.29a0.390.39 0 1-0.270.36l-1.950.53c-0.150.04-0.27-0.05-0.27-0.21v-0.73c0-0.160.13-0.280.28-0.28h1.93c0.16 0 0.280.130.280.28zm-5.81 1.59a0.390.39 0 1-0.270.36l-1.950.54c-0.150.04-0.27-0.05-0.27-0.21v-3.76c0-0.160.13-0.280.28-0.28h1.93c0.16 0 0.280.130.280.28zM7.84 8.46c0-0.160.12-0.320.27-0.36l1.95-0.53c0.15-0.040.270.050.270.21v0.73a0.280.28 0 1-0.280.28H8.12a0.280.28 0 1-0.28-0.28zm5.81-1.59c0-0.160.12-0.320.27-0.36l1.95-0.53c0.15-0.040.270.050.270.21v3.76a0.280.28 0 1-0.280.28h-1.93a0.280.28 0 1-0.28-0.28zM12 0C5.38 0 0 5.38 0 12c0 6.62 5.38 12 12 12 6.62 0 12-5.38 12-12 0-6.62-5.38-12-12-12Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiHackster;
