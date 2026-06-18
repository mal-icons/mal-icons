import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-heroicgameslauncher",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiHeroicgameslauncher {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 0 12 0a0.890.89 0 0 0-0.360.08C8.96 1.25 6.29 2.43 3.62 3.61A0.890.89 0 0 0 3.1 4.62l3.15 14.65c0.040.20.150.380.310.5l4.88 4.03a0.90.9 0 0 0 1.130.01l5-4.03a0.90.9 0 0 0 0.32-0.52L20.9 4.61a0.90.9 0 0 0-0.51-1L12.360.07A0.890.89 0 0 0 12 0zm0 0.35v0c0.11 0 0.230.020.330.07l7.42 3.27a0.830.83 0 0 1 0.480.92l-2.79 13.54a0.830.83 0 0 1-0.290.48l-4.62 3.73a0.830.83 0 0 1-1.04-0.01l-4.51-3.72a0.830.83 0 0 1-0.28-0.46L3.78 4.62a0.830.83 0 0 1 0.48-0.93L11.670.42a0.830.83 0 0 1 0.33-0.07zm-0.04 1.95L10.28 5.2h0l1.21 11.30.510.410.51-0.41 1.12-11.3zM9 16.26l-0.58 1.070.58 1.07 2.3-0.380.47-0.69-0.47-0.67zm6 0-2.290.4-0.470.670.470.69 2.30.380.58-1.07zm-3 1.49-0.510.44-0.28 2.170.790.550.79-0.55-0.29-2.17z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiHeroicgameslauncher;
