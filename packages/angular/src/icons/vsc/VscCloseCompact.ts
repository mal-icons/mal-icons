import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-close-compact",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscCloseCompact {
  readonly viewBox = "0 0 12 12";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10.15 1.14C10.35 0.94 10.66 0.94 10.86 1.14C11.06 1.34 11.06 1.65 10.86 1.85L6.71 5.99L10.86 10.14C11.06 10.34 11.06 10.65 10.86 10.85C10.76 10.95 10.63 11 10.51 11H10.5C10.37 11 10.24 10.95 10.15 10.85L6 6.7L1.85 10.85C1.75 10.95 1.62 11 1.5 11C1.37 11 1.24 10.95 1.15 10.85C0.95 10.65 0.95 10.34 1.15 10.14L5.29 5.99L1.15 1.85C0.95 1.65 0.95 1.34 1.15 1.14C1.35 0.94 1.66 0.94 1.86 1.14L6 5.28L10.15 1.14Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscCloseCompact;
