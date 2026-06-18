import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-adonisjs",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiAdonisjs {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0 12c0 9.68 2.32 12 12 12s12-2.32 12-12S21.68 0 12 0 0 2.32 0 12Zm4.84 2.49 3.76-8.55C9.24 4.5 10.46 3.72 12 3.72c1.54 0 2.760.78 3.4 2.22l3.76 8.55c0.170.420.320.950.32 1.42 0 2.13-1.49 3.62-3.62 3.62-0.73 0-1.3-0.18-1.88-0.37-0.6-0.19-1.2-0.39-1.98-0.39-0.77 0-1.390.2-20.39-0.590.19-1.170.37-1.870.37-2.12 0-3.62-1.49-3.62-3.62 0-0.460.15-1 0.32-1.42ZM12 7.43l-3.71 8.41c1.1-0.51 2.37-0.76 3.72-0.76 1.3 0 2.610.25 3.660.76Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiAdonisjs;
