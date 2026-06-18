import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-fiverr",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiFiverr {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M23 15.59a11 0 1 0 0-1.9911 0 0 00 1.99zm-1-3.7h-0.85c-0.55 0-0.840.41-0.84 1.09v2.47h-1.61v-3.56h-0.68c-0.55 0-0.840.41-0.84 1.09v2.47h-1.61v-4.87h1.61v0.74c0.26-0.570.63-0.74 1.16-0.74h1.97v0.74c0.26-0.570.63-0.74 1.16-0.74h0.53v1.32zm-6.79 1.5h-3.36c0.090.550.430.86 1.010.860.43 0 0.73-0.170.83-0.49l1.430.4c-0.350.85-1.22 1.36-2.25 1.36-1.75 0-2.55-1.35-2.55-2.51 0-1.140.7-2.5 2.45-2.5 1.86 0 2.47 1.38 2.47 2.41 0 0.22-0.010.37-0.020.48zm-1.56-0.94c-0.04-0.42-0.34-0.81-0.89-0.81-0.51 0-0.810.23-0.910.81h1.8zM7.51 15.44h1.42l1.77-4.87h-1.62l-0.86 2.84-0.88-2.84H5.72l1.79 4.87zm-6.6 0H2.51v-3.56h1.52v3.56h1.59v-4.87H2.51v-0.3c0-0.330.24-0.540.61-0.54h0.92V8.41H2.85c-1.16 0-1.940.71-1.94 1.76v0.4H0v1.32h0.91v3.56z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiFiverr;
