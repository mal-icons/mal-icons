import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-notifications-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtNotificationsOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 17h8v-0.24L8.34 9.1C8.12 9.68 8 10.32 8 11v6zm4-10.5c-0.19 0-0.370.03-0.550.06L16 11.1V11c0-2.48-1.51-4.5-4-4.5z","opacity":".3"}],["path",{"d":"M12 22c1.1 0 2-0.9 2-2h-4c0 1.10.9 2 2 2zm0-15.5c2.49 0 4 2.02 4 4.5v0.1l2 2V11c0-3.07-1.63-5.64-4.5-6.32V4c0-0.83-0.67-1.5-1.5-1.5s-1.50.67-1.5 1.5v0.68c-0.240.06-0.470.15-0.690.23l1.64 1.64c0.18-0.020.36-0.050.55-0.05zM5.41 3.35 4 4.76l2.81 2.81C6.29 8.57 6 9.74 6 11v5l-2 2v1h14.24l1.74 1.74 1.41-1.41L5.41 3.35zM16 17H8v-6c0-0.680.12-1.320.34-1.9L16 16.76V17z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtNotificationsOff;
