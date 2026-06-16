import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-podcasts",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrPodcasts {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14 12c0 0.74-0.4 1.38-1 1.72V21c0 0.55-0.45 1-1 1s-1-0.45-1-1v-7.28c-0.6-0.35-1-0.98-1-1.72 0-1.10.9-2 2-2s2 0.9 2 2zm-3.25-5.87c-2.270.46-4.12 2.28-4.61 4.55-0.4 1.860.07 3.62 1.08 4.940.350.45 1.030.47 1.430.07l0.07-0.07c0.34-0.340.34-0.870.06-1.25-0.68-0.9-0.98-2.1-0.66-3.370.35-1.42 1.52-2.57 2.95-2.88A3.99 3.99 0 0 1 16 12c0 0.87-0.28 1.67-0.76 2.32-0.30.41-0.290.970.07 1.330.440.44 1.170.37 1.54-0.140.72-0.98 1.15-2.2 1.15-3.51 0-3.72-3.39-6.65-7.25-5.87zm0.08-4.06c-4.530.51-8.22 4.18-8.76 8.71-0.35 2.950.59 5.67 2.32 7.70.370.43 1.030.46 1.430.06l0.05-0.05c0.35-0.350.38-0.920.05-1.3a7.97 7.97 0 0 1-1.7-7.06c0.7-3.01 3.18-5.39 6.22-5.97C15.53 3.18 20 7.08 20 12c0 1.96-0.72 3.76-1.9 5.16a1 1 0 0 0 0.05 1.35c0.420.42 1.110.39 1.49-0.07A9.93 9.93 0 0 0 22 12c0-5.91-5.13-10.62-11.17-9.93z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrPodcasts;
