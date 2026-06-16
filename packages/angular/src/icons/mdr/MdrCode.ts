import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-code",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrCode {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8.7 15.9 4.8 12l3.9-3.9a0.980.98 0 0 0 0-1.40.980.98 0 0 0-1.4 0l-4.59 4.59a11 0 0 0 0 1.41l4.59 4.6c0.390.39 1.010.39 1.4 0a0.980.98 0 0 0 0-1.4zm6.6 0 3.9-3.9-3.9-3.9a0.980.98 0 0 1 0-1.40.980.98 0 0 1 1.4 0l4.59 4.59c0.390.390.39 1.02 0 1.41l-4.59 4.6a0.980.98 0 0 1-1.4 0 0.980.98 0 0 1 0-1.4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrCode;
