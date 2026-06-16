import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-sanitizer",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrSanitizer {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15.5 6.5c0-0.560.67-1.49 1.11-2.040.2-0.250.58-0.250.77 0 0.440.55 1.11 1.48 1.11 2.040.010.83-0.66 1.5-1.49 1.5s-1.5-0.67-1.5-1.5zm4 8.5a2.5 2.5 0 0 0 2.5-2.5c0-1.25-1.41-3.16-2.11-4.04a0.490.49 0 0 0-0.77 0c-0.710.88-2.12 2.79-2.12 4.04a2.5 2.5 0 0 0 2.5 2.5zM12 14h-1v-1c0-0.55-0.45-1-1-1s-1 0.45-1 1v1H8c-0.55 0-1 0.45-1 1s0.45 1 1 1h1v1c0 0.550.45 1 1 1s1-0.45 1-1v-1h1c0.55 0 1-0.45 1-1s-0.45-1-1-1zm4-2v8c0 1.1-0.9 2-2 2H6c-1.1 0-2-0.9-2-2v-8c0-2.97 2.16-5.43 5-5.91V4H8c-0.55 0-1-0.45-1-1s0.45-1 1-1h5c0.61 0 1.190.11 1.720.310.670.250.83 1.130.33 1.64a1 1 0 0 1-1.050.23c-0.32-0.12-0.65-0.18-1-0.18h-2v2.09c2.840.48 5 2.94 5 5.91z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrSanitizer;
