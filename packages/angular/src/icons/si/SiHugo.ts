import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-hugo",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiHugo {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.75 0a4 4 0 0-2.050.6L3.33 4.53a4.25 4.25 0 0-2.02 3.62v8.03c0 1.470.79 2.84 2.07 3.57l6.49 3.73a3.88 3.88 0 3.840.02l7.04-3.97a3.82 3.82 0 1.94-3.32V7.75a3.57 3.57 0 0-1.77-3.08L13.820.54a4 4 0 0-2.06-0.54zm0.02 1.67c0.41-0.010.830.1 1.20.32l7.1 4.13c0.580.340.940.960.94 1.64v8.46c0 0.77-0.41 1.48-1.09 1.86l-7.04 3.97a2.2 2.2 0 1-2.18-0.01l-6.48-3.73a2.45 2.45 0 1-1.23-2.12v-8.03c0-0.890.46-1.72 1.22-2.19l6.38-3.93a2.32 2.32 0 11.19-0.35zm-4.7 3.84V18.37h2.69v-5.62h4.46v5.62h2.7V5.52h-2.7v4.68h-4.46V5.52Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiHugo;
