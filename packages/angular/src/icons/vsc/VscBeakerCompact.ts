import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-beaker-compact",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscBeakerCompact {
  readonly viewBox = "0 0 12 12";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3.5 1H4V4.69C4 5.13 3.88 5.57 3.66 5.95L1.45 9.75C0.87 10.75 1.59 12.01 2.75 12.01H9.27C10.43 12.01 11.15 10.75 10.57 9.75L8.36 5.95C8.14 5.57 8.02 5.13 8.02 4.69V1H8.52C8.8 1 9.02 0.78 9.02 0.5C9.02 0.22 8.78 0 8.5 0H3.5C3.22 0 3 0.22 3 0.5C3 0.78 3.22 1 3.5 1ZM5 4.69V1H7V4.69C7 5.31 7.16 5.92 7.48 6.45L7.8 7H4.21L4.53 6.45C4.84 5.91 5.01 5.31 5.01 4.69H5ZM3.62 8H8.38L9.69 10.25C9.88 10.58 9.64 11 9.26 11H2.74C2.35 11 2.11 10.58 2.31 10.25L3.62 8Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscBeakerCompact;
