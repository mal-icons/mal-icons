import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-chevron-right-compact",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscChevronRightCompact {
  readonly viewBox = "0 0 12 12";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4.5 10C4.37 10 4.24 9.95 4.15 9.85C3.95 9.65 3.95 9.34 4.15 9.14L7.3 5.99L4.15 2.84C3.95 2.64 3.95 2.33 4.15 2.13C4.35 1.93 4.66 1.93 4.86 2.13L8.36 5.63C8.56 5.83 8.56 6.14 8.36 6.34L4.86 9.84C4.76 9.94 4.63 9.99 4.51 9.99L4.5 10Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscChevronRightCompact;
