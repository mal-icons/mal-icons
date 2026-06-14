import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-delete",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiDelete {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm3.71 10.29c0.390.390.39 1.02 0 1.41-0.190.2-0.450.29-0.710.29s-0.51-0.1-0.71-0.29l-2.29-2.29-2.29 2.29c-0.190.2-0.450.29-0.710.29s-0.51-0.1-0.71-0.29c-0.39-0.39-0.39-1.02 0-1.41l2.29-2.29-2.29-2.29c-0.39-0.39-0.39-1.02 0-1.41s1.02-0.39 1.41 0l2.29 2.29 2.29-2.29c0.39-0.39 1.02-0.39 1.41 0s0.39 1.02 0 1.41l-2.29 2.29 2.29 2.29z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiDelete;
