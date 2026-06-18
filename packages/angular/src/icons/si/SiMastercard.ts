import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-mastercard",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiMastercard {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.34 18.03c0.060.050.120.10.180.15-1.180.78-2.59 1.24-4.11 1.24C3.32 19.42 0 16.1 0 12c0-4.09 3.32-7.42 7.42-7.42 1.52 0 2.930.46 4.11 1.24-0.060.05-0.120.1-0.160.15C9.6 7.49 8.6 9.69 8.6 12c0 2.31 1 4.51 2.75 6.03zm5.24-13.45c-1.52 0-2.930.46-4.11 1.240.060.050.120.10.170.15C14.4 7.49 15.41 9.69 15.41 12c0 2.31-1 4.51-2.75 6.03-0.060.05-0.120.1-0.180.15 1.180.78 2.59 1.24 4.11 1.24C20.68 19.42 24 16.1 24 12c0-4.09-3.32-7.42-7.42-7.42zM12 6.17c-0.10.08-0.190.15-0.280.23C10.16 7.76 9.17 9.77 9.17 12c0 2.240.99 4.24 2.55 5.60.090.080.190.160.280.230.1-0.070.19-0.150.28-0.23 1.56-1.36 2.55-3.36 2.55-5.59 0-2.23-0.99-4.24-2.55-5.59-0.09-0.08-0.18-0.16-0.28-0.23z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiMastercard;
