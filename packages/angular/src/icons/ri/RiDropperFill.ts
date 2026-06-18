import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-dropper-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiDropperFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15.54 2.81C17.1 1.25 19.63 1.25 21.19 2.81C22.75 4.37 22.75 6.9 21.19 8.46L18.36 11.29L18.72 11.65C19.11 12.04 19.11 12.67 18.72 13.06C18.33 13.45 17.69 13.45 17.3 13.06L16.95 12.71L10.74 18.92C10.18 19.48 9.47 19.86 8.69 20.02L6.94 20.37C6.55 20.44 6.19 20.63 5.91 20.91L4.93 21.9C4.54 22.29 3.91 22.29 3.51 21.9L2.1 20.49C1.71 20.1 1.71 19.46 2.1 19.07L3.09 18.09C3.37 17.81 3.56 17.45 3.63 17.06L3.98 15.31C4.14 14.53 4.52 13.82 5.08 13.27L11.29 7.05L10.94 6.7C10.55 6.31 10.55 5.67 10.94 5.28C11.33 4.89 11.96 4.89 12.35 5.28L12.71 5.64L15.54 2.81ZM12.71 8.46L6.49 14.68C6.21 14.96 6.02 15.31 5.95 15.7L5.59 17.46C5.44 18.23 5.06 18.94 4.5 19.5C5.06 18.94 5.77 18.56 6.54 18.41L8.3 18.05C8.69 17.98 9.04 17.79 9.32 17.51L15.54 11.29L12.71 8.46Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiDropperFill;
