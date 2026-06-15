import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-chevron-down-compact",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscChevronDownCompact {
  readonly viewBox = "0 0 12 12";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6 8.5C5.87 8.5 5.74 8.45 5.65 8.35L2.15 4.85C1.95 4.65 1.95 4.34 2.15 4.14C2.35 3.94 2.66 3.94 2.86 4.14L6.01 7.29L9.16 4.14C9.36 3.94 9.67 3.94 9.87 4.14C10.07 4.34 10.07 4.65 9.87 4.85L6.37 8.35C6.27 8.45 6.14 8.5 6.02 8.5H6Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscChevronDownCompact;
