import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-simplenote",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiSimplenote {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3.47 3.62c00.05-0.010.1-0.020.16-0.41 4.63 2.75 8.55 8.03 9.99 2.020.55 5.37 2.02 5.06 5.6a5.06 5.06 0 0 1-1.8 3.46c-1.020.86-2.31 1.21-3.64 1.17C5.15 23.79 0 18.37 0 12.05c0-3.28 1.33-6.26 3.47-8.43zM9.82 1.03c0.91-0.76 2.06-1.08 3.24-1.03C190.27 24 5.67 24 11.94c0 2.86-1 5.48-2.67 7.540.33-4.91-2.94-8.9-8.59-10.44-2.34-0.64-4.75-2.27-4.51-4.95A4.47 4.47 0 0 1 9.82 1.03z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiSimplenote;
