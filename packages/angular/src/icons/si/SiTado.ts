import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-tado",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiTado {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M22.49 7.8a1.51 1.51 0 1 0 0 3.03 1.51 1.51 0 0 0 0-3.03zm-8.50v2.46c-0.46-0.34-0.94-0.56-1.69-0.56-1.81 0-2.83 1.36-2.83 3.27 0 1.79 1.02 3.25 2.83 3.25 1.78 0 2.82-1.46 2.82-3.25v-5.16zM1.89 7.8l-1.120.38V9.69H0v0.95h0.76v3.87c0 0.840.67 1.51 1.52 1.51h1.13v-0.94h-0.95a0.570.57 0 0 1-0.57-0.57v-3.87h3.22V9.69H1.89zm20.60.38a1.14 1.14 0 1 1 0 2.27 1.14 1.14 0 0 1 0-2.27zM5.48 9.69v0.95h1.91c0.35 0 0.550.280.550.54v0.77l-1.320c-1.13 0-2.270.77-2.27 2.08 0 1.31 1.13 2.09 2.27 2.090.95 0 1.33-0.57 1.33-0.57v0.47H9.07v-4.86c0-0.78-0.67-1.46-1.51-1.46zm12.860c-1.81 0-2.83 1.37-2.83 3.24 0 1.91 1.03 3.28 2.84 3.28 1.79 0 2.83-1.36 2.83-3.28 0-1.86-1.05-3.24-2.83-3.24zm-6.050.95c1.14 0 1.68 1.19 1.68 2.32 0 1.12-0.55 2.31-1.68 2.31-1.23 0-1.7-1.19-1.7-2.31 0-1.130.56-2.32 1.7-2.32zm6.050.01c1.12 0 1.7 1.18 1.7 2.3 0 1.12-0.57 2.31-1.7 2.31-1.13 0-1.71-1.16-1.71-2.31 0-1.130.57-2.31 1.71-2.31zM6.61 12.9h1.32v1.21c0 0.5-0.37 1.06-1.32 1.06-0.37 0-1.13-0.19-1.13-1.13 0-0.840.76-1.13 1.13-1.13Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiTado;
