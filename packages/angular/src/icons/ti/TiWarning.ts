import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-warning",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiWarning {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21.17 15.4l-5.91-9.85c-0.78-1.29-1.96-2.03-3.26-2.03s-2.480.74-3.26 2.03l-5.91 9.86c-0.79 1.31-0.87 2.71-0.23 3.830.64 1.13 1.88 1.77 3.41 1.77h12c1.53 0 2.77-0.65 3.41-1.770.64-1.120.55-2.52-0.23-3.83zm-9.17 2.15c-0.85 0-1.55-0.69-1.55-1.55 0-0.850.7-1.55 1.55-1.55s1.550.7 1.55 1.55c0 0.85-0.7 1.55-1.55 1.55zm1.63-7.42c-0.010.03-1.4 3.47-1.4 3.47-0.040.09-0.130.16-0.230.16s-0.19-0.06-0.23-0.16l-1.39-3.44c-0.09-0.23-0.13-0.44-0.13-0.65 0-0.960.79-1.75 1.75-1.75s1.750.79 1.75 1.75c0 0.21-0.040.42-0.120.63z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiWarning;
