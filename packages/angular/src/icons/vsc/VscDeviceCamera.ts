import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-device-camera",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscDeviceCamera {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11 8C11 9.66 9.66 11 8 11C6.34 11 5 9.66 5 8C5 6.34 6.34 5 8 5C9.66 5 11 6.34 11 8ZM10 8C10 6.9 9.1 6 8 6C6.9 6 6 6.9 6 8C6 9.1 6.9 10 8 10C9.1 10 10 9.1 10 8ZM6.62 2C6.05 2 5.53 2.32 5.28 2.83L4.69 4H4C2.9 4 2 4.9 2 6V11C2 12.1 2.9 13 4 13H12C13.1 13 14 12.1 14 11V6C14 4.9 13.1 4 12 4H11.31L10.72 2.83C10.47 2.32 9.95 2 9.38 2H6.62ZM6.17 3.28C6.26 3.11 6.43 3 6.62 3H9.38C9.57 3 9.74 3.11 9.83 3.28L10.55 4.72C10.64 4.89 10.81 5 11 5H12C12.55 5 13 5.45 13 6V11C13 11.55 12.55 12 12 12H4C3.45 12 3 11.55 3 11V6C3 5.45 3.45 5 4 5H5C5.19 5 5.36 4.89 5.45 4.72L6.17 3.28Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscDeviceCamera;
