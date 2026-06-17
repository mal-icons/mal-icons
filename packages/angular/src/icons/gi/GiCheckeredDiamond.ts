import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-checkered-diamond",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiCheckeredDiamond {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M362.04 15.28l-21.56 71.58c-3 1.19-5.89 2.61-8.63 4.25l-61.21-69.18L64.46 196.37l83.21 296.76h19.41L87.3 208.62l0.730.28L269.5 49.18l0.080.10-0.34 47.98 54.23c-4.4 5.11-7.94 10.99-10.38 17.41l-38.68 11.650.75-57.95-161.49 142.14 1.090.42-0.250.07 80.96 276.22h19.48l-78.57-268.05 135.75 51.75-29.3 216.31h62.28L405.32 234.5l-36.06 10.93 14.97-49.69c3.66-1.49 7.13-3.34 10.38-5.51L427.75 227.7l-1.540.47 1.640.67-108.43 264.29h20.31L451.75 226.62l-43.45-49.11c3.13-4.01 5.77-8.43 7.79-13.17l73.02-22-72.2-21.75c-5.85-15.4-18-27.69-33.3-33.74l-21.56-71.57zm73.34 25.9c-13.13 0-23.77 10.64-23.77 23.77 0 13.13 10.64 23.78 23.77 23.78 13.13 0 23.77-10.64 23.77-23.77 0-13.13-10.64-23.77-23.77-23.77zM268.25 152.36l39.77 11.98c6.04 14.21 17.52 25.54 31.83 31.39l16.18 53.71-89.38 27.1 1.6-124.17z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiCheckeredDiamond;
