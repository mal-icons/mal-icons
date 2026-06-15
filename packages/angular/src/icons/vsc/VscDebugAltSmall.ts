import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-debug-alt-small",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscDebugAltSmall {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13.24 9.31L8.81 11.8C8.64 11.48 8.37 11.22 8.03 11.09L8.04 11.08L12.75 8.44C13.09 8.24 13.09 7.76 12.75 7.56L4.75 3.06C4.41 2.88 4 3.12 4 3.5V7C3.65 7 3.32 7.08 3 7.19V3.5C3 2.35 4.24 1.63 5.24 2.19L13.24 6.69C14.25 7.27 14.25 8.73 13.24 9.31L13.24 9.31ZM7 10.71V12H7.5C7.78 12 8 12.22 8 12.5C8 12.78 7.78 13 7.5 13H7C7 13.38 6.93 13.75 6.8 14.09L7.85 15.15C8.05 15.34 8.05 15.66 7.85 15.85C7.76 15.95 7.63 16 7.5 16C7.37 16 7.24 15.95 7.15 15.85L6.26 14.97C5.71 15.6 4.9 16 4 16C3.1 16 2.29 15.6 1.74 14.97L0.85 15.85C0.76 15.95 0.63 16 0.5 16C0.37 16 0.24 15.95 0.15 15.85C-0.05 15.66 -0.05 15.34 0.15 15.15L1.21 14.09C1.07 13.75 1 13.38 1 13H0.5C0.22 13 0 12.78 0 12.5C0 12.22 0.22 12 0.5 12H1V10.71L0.15 9.85C-0.05 9.66 -0.05 9.34 0.15 9.15C0.34 8.95 0.66 8.95 0.85 9.15L1.71 10H2C2 8.9 2.9 8 4 8C5.1 8 6 8.9 6 10H6.29L7.15 9.15C7.34 8.95 7.66 8.95 7.85 9.15C8.05 9.34 8.05 9.66 7.85 9.85L7 10.71ZM3 10H5C5 9.45 4.55 9 4 9C3.45 9 3 9.45 3 10ZM6 11H2V13C2 14.1 2.9 15 4 15C5.1 15 6 14.1 6 13V11Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscDebugAltSmall;
