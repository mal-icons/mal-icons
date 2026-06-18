import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-pagespeedinsights",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiPagespeedinsights {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M22.36 1.64H1.64C0.73 1.64 0 2.370 3.27L0 20.73v0c0 0.90.73 1.63 1.64 1.63h20.73c0.9 0 1.64-0.73 1.64-1.64V3.27c0.02-0.89-0.76-1.64-1.64-1.64zM3.98 2.89c0.49-0.51 1.280.280.770.77-0.490.51-1.28-0.28-0.77-0.77zM1.8 2.89c0.51-0.51 1.280.270.770.77-0.490.5-1.27-0.28-0.77-0.77zm21.7 17.84c0.010.61-0.52 1.15-1.14 1.14H1.64A1.14 1.14 0 0 1 0.5 20.73L0.5 4.91H23.5v15.82zM11 16.16l5.95-4.58c0.24-0.20.580.130.390.37l00-3.94 6.35a1.64 1.64 0 0 1-2.450.41c-0.78-0.67-0.81-1.830.05-2.55zm4.76-0.75c0.09-0.17 2-3.18 2.06-3.35 2.06 1.81 3.03 4.38 2.9 7.03h-3.82c0.07-1.39-0.29-2.68-1.14-3.68zm-8.68 3.68H3.28c-0.36-7.02 7.15-11.73 13.39-7.92l-3.46 2.62c-3.3-0.76-6.36 1.71-6.12 5.3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiPagespeedinsights;
