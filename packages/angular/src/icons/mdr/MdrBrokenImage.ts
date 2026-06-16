import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-broken-image",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrBrokenImage {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21 5v6.59l-2.29-2.3c-0.39-0.39-1.03-0.39-1.42 0L14 12.59 10.71 9.3a11 0 0 0-1.41 0L6 12.59 3 9.58V5c0-1.10.9-2 2-2h14c1.1 0 2 0.9 2 2zm-3 6.42 3 3.01V19c0 1.1-0.9 2-2 2H5c-1.1 0-2-0.9-2-2v-6.58l2.29 2.29c0.390.39 1.020.39 1.41 0l3.3-3.3 3.29 3.29c0.390.39 1.020.39 1.41 0l3.3-3.28z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrBrokenImage;
