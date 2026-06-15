import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-telescope",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscTelescope {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14.45 6.28L11.95 1.28C11.82 1.03 11.52 0.93 11.28 1.05L8.28 2.55C8.03 2.68 7.93 2.98 8.05 3.22L8.08 3.28L4.52 5.05C4.28 5.18 4.18 5.48 4.3 5.72L4.58 6.28L2.02 7.55C1.78 7.68 1.68 7.98 1.8 8.22L2.8 10.22C2.89 10.4 3.06 10.5 3.25 10.5C3.32 10.5 3.4 10.48 3.47 10.45L6.02 9.17L6.3 9.72C6.35 9.81 6.42 9.88 6.5 9.93L4.56 13.25C4.42 13.49 4.51 13.79 4.74 13.93C4.82 13.98 4.91 14 5 14C5.17 14 5.34 13.91 5.43 13.75L7.92 9.47L8 9.43V14.5C8 14.78 8.22 15 8.5 15C8.77 15 9 14.78 9 14.5V9.35L11.57 13.75C11.66 13.91 11.83 14 12 14C12.08 14 12.17 13.98 12.25 13.93C12.49 13.79 12.57 13.49 12.43 13.25L9.71 8.58L10.52 8.17L10.55 8.22C10.64 8.4 10.81 8.5 11 8.5C11.07 8.5 11.15 8.48 11.22 8.45L14.22 6.95C14.47 6.82 14.57 6.52 14.44 6.28H14.45ZM3.47 9.33L2.92 8.22L5.03 7.17L5.58 8.28L3.47 9.33ZM6.97 8.83L5.42 5.72L8.53 4.17L10.08 7.28L6.97 8.83ZM11.22 7.33L9.17 3.22L11.28 2.17L13.33 6.28L11.22 7.33Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscTelescope;
