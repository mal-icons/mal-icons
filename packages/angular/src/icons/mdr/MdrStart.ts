import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-start",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrStart {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15.29 17.29c0.390.39 1.020.39 1.41 0l4.59-4.59a11 0 0 0 0-1.41L16.7 6.7a11 0 0 0-1.41 0c-0.380.39-0.39 1.03 0 1.42L18.17 11H7c-0.55 0-1 0.45-1 1s0.45 1 1 1h11.17l-2.88 2.88a11 0 0 0 0 1.41zM3 18c0.55 0 1-0.45 1-1V7c0-0.55-0.45-1-1-1s-1 0.45-1 1v10c0 0.550.45 1 1 1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrStart;
