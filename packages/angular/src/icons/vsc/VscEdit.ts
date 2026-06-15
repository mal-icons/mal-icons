import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-edit",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscEdit {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14.24 1.76C13.21 0.74 11.55 0.74 10.53 1.76L2.66 9.64C2.28 10.01 2.02 10.48 1.88 10.99L1.02 14.38C0.97 14.55 1.02 14.73 1.15 14.85C1.27 14.98 1.45 15.03 1.62 14.98L5.01 14.12C5.52 13.98 5.99 13.72 6.36 13.34L14.24 5.47C15.26 4.45 15.26 2.79 14.24 1.76ZM11.24 2.47C11.87 1.84 12.9 1.84 13.53 2.47C14.16 3.1 14.16 4.13 13.53 4.76L12.75 5.54L10.46 3.25L11.24 2.47ZM9.75 3.96L12.04 6.25L5.66 12.64C5.41 12.88 5.1 13.06 4.76 13.15L2.19 13.81L2.85 11.24C2.94 10.9 3.12 10.59 3.36 10.34L9.75 3.96Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscEdit;
