import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-qi",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiQi {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16.57 0c-0.84 0-1.520.68-1.52 1.52 0 0.840.68 1.53 1.53 1.53s1.52-0.68 1.52-1.52C18.10.68 17.42 0 16.57 0zm-4.64 2.86c-1.710.01-3.430.6-4.84 1.78-3.23 2.71-3.65 7.52-0.94 10.74 1.46 1.74 3.54 2.67 5.64 2.720.3 0 0.30.290.30.29v2.65s0 2.76 2.66 2.95c0.30.010.3-0.290.3-0.29V3.79s0-0.29-0.29-0.41a7.67 7.67 0 0 0-2.82-0.51zm4.75 1.66c-0.110-0.110.18-0.110.39v11.15c0 0.29 0 0.530.290.30.01-0.010.02-0.020.03-0.03 3.23-2.71 3.65-7.520.94-10.74a7.59 7.59 0 0 0-0.97-0.97c-0.08-0.07-0.14-0.09-0.19-0.09zm-4.75 1.39c0.17 0 0.170.160.170.16v8.82s0 0.16-0.160.16c-1.28-0.02-2.55-0.57-3.44-1.63-1.62-1.94-1.37-4.820.56-6.450.84-0.7 1.86-1.05 2.87-1.07z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiQi;
