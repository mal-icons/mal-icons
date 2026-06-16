import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-remove-moderator",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrRemoveModerator {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20 11.09v-4.7a2 2 0 0 0-1.3-1.87l-6-2.25c-0.45-0.17-0.95-0.17-1.4 0L6.78 3.96l12.09 12.09c0.72-1.53 1.13-3.22 1.13-4.96zm0.49 9.4L3.51 3.51A11 0 1 0 2.1 4.92L4 6.83v4.26c0 4.83 3.13 9.37 7.43 10.750.370.120.770.12 1.14 0 1.49-0.48 2.84-1.35 3.97-2.47l2.53 2.53c0.390.39 1.020.39 1.41 0 0.4-0.390.4-1.020.01-1.41z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrRemoveModerator;
