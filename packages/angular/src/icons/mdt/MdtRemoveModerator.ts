import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-remove-moderator",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtRemoveModerator {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6 11.09c0 4 2.55 7.7 6 8.83 1.17-0.38 2.24-1.07 3.14-1.95L6 8.83v2.26zm6-6.95L8.34 5.51l9.02 9.02c0.41-1.080.64-2.250.64-3.44v-4.7l-6-2.25z","opacity":".3"}],["path",{"d":"m12 4.14 6 2.25v4.7c0 1.19-0.23 2.36-0.64 3.44l1.51 1.51c0.72-1.53 1.13-3.22 1.13-4.95V5l-8-3-5.22 1.96 1.55 1.55L12 4.14zM2.81 2.81 1.39 4.22 4 6.83v4.26c0 5.05 3.41 9.76 8 10.91 1.72-0.43 3.28-1.36 4.55-2.62l3.23 3.23 1.41-1.41L2.81 2.81zM12 19.92c-3.45-1.13-6-4.82-6-8.83V8.83l9.14 9.14c-0.90.88-1.97 1.57-3.14 1.95z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtRemoveModerator;
