import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-accuweather",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiAccuweather {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6.74 6.77a7.44 7.44 0 0 1 10.52 0 7.43 7.43 0 0 1 0 10.52 7.44 7.44 0 0 1-10.52 0c-2.9-2.9-2.9-7.64 0-10.51M12 20.34c-4.59 0-8.34-3.75-8.34-8.34s3.75-8.31 8.34-8.31c4.59 0 8.31 3.75 8.31 8.31 0 4.62-3.72 8.34-8.31 8.34zm12-8.37L21.27 9.5l1.1-3.51-3.6-0.78-0.78-3.6-3.51 1.13L11.970l-2.47 2.73L5.99 1.63 5.2 5.23l-3.60.79 1.13 3.52L0 12.03l2.73 2.47-1.1 3.51 3.60.780.78 3.6 3.52-1.13 2.5 2.73 2.47-2.73 3.52 1.10.79-3.6 3.6-0.81-1.13-3.51L24 11.97z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiAccuweather;
