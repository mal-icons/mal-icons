import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-mode-night",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtModeNight {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9.5 4c-0.34 0-0.680.02-1.010.07C10.4 6.23 11.5 9.05 11.5 12s-1.1 5.77-3.01 7.93c0.330.050.670.07 1.010.07 4.41 0 8-3.59 8-8s-3.59-8-8-8z","opacity":".3"}],["path",{"d":"M9.5 2c-1.82 0-3.530.5-5 1.35 2.99 1.73 5 4.95 5 8.65s-2.01 6.92-5 8.65c1.470.85 3.18 1.35 5 1.35 5.52 0 10-4.48 10-10S15.02 2 9.5 2zm0 18c-0.34 0-0.68-0.02-1.01-0.07 1.91-2.16 3.01-4.98 3.01-7.93s-1.1-5.77-3.01-7.93C8.82 4.02 9.16 4 9.5 4c4.41 0 8 3.59 8 8s-3.59 8-8 8z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtModeNight;
