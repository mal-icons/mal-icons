import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-device-recover-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiDeviceRecoverFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19 2C19.55 2 20 2.45 20 3V21C20 21.55 19.55 22 19 22H5C4.45 22 4 21.55 4 21V3C4 2.45 4.45 2 5 2H19ZM12 7C9.24 7 7 9.24 7 12C7 14.76 9.24 17 12 17C12.33 17 12.65 16.97 12.96 16.91L12 15C10.34 15 9 13.66 9 12C9 10.34 10.34 9 12 9C13.6 9 15 10.34 15 12H12.5L14.63 16.25C16.05 15.37 17 13.8 17 12C17 9.24 14.76 7 12 7Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiDeviceRecoverFill;
