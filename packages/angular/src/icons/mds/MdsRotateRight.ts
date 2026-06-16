import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-rotate-right",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsRotateRight {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15.55 5.55 11 1v3.07C7.06 4.56 4 7.92 4 12s3.05 7.44 7 7.93v-2.02c-2.84-0.48-5-2.94-5-5.91s2.16-5.43 5-5.91V10l4.55-4.45zM19.93 11a7.91 7.91 0 0 0-1.62-3.89l-1.42 1.42c0.540.750.88 1.6 1.02 2.47h2.02zM13 17.9v2.02c1.39-0.17 2.74-0.71 3.9-1.61l-1.44-1.44c-0.750.54-1.590.89-2.46 1.03zm3.89-2.42 1.42 1.41c0.9-1.16 1.45-2.5 1.62-3.89h-2.02c-0.140.87-0.48 1.72-1.02 2.48z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsRotateRight;
