import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-notification-4-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiNotification4Fill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20 18.67L20.4 19.2C20.57 19.42 20.52 19.73 20.3 19.9C20.21 19.96 20.11 20 20 20H4C3.72 20 3.5 19.78 3.5 19.5C3.5 19.39 3.54 19.29 3.6 19.2L4 18.67V10C4 5.58 7.58 2 12 2C16.42 2 20 5.58 20 10V18.67ZM9.5 21H14.5C14.5 22.38 13.38 23.5 12 23.5C10.62 23.5 9.5 22.38 9.5 21Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiNotification4Fill;
