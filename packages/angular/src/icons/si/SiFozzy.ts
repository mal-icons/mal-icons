import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-fozzy",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiFozzy {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14.49 20.48l-1-2.1 5.79-11.27c0.9 1.4 1.5 3.09 1.5 4.89 0 3.99-2.59 7.38-6.28 8.48zM130.03C5.62-0.47-0.47 5.620.03 13c0.5 5.79 5.19 10.48 10.97 10.97 7.380.5 13.47-5.59 12.97-12.97C23.47 5.22 18.780.53 130.03zM7.11 4.72c1.3-0.9 2.79-1.4 4.39-1.5L8.81 8.41 7.11 4.72zm3.49 7.38l4.19-8.38c0.80.3 1.50.6 2.19 1.1L11.9 14.79 10.6 12.1zM3.22 12c0-1.80.6-3.49 1.5-4.89l6.49 13.67C6.71 20.38 3.22 16.59 3.22 12z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiFozzy;
