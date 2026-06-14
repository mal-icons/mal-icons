import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-media-record",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiMediaRecord {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18 12c0-1.66-0.67-3.16-1.76-4.24-1.09-1.08-2.59-1.76-4.24-1.76-1.66 0-3.160.67-4.24 1.76-1.09 1.09-1.76 2.59-1.76 4.24 0 1.660.67 3.16 1.76 4.24s2.59 1.76 4.24 1.76c1.66 0 3.16-0.67 4.24-1.76 1.09-1.09 1.76-2.59 1.76-4.24z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiMediaRecord;
