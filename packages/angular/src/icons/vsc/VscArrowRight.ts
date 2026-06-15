import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-arrow-right",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscArrowRight {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13.85 8.15L8.85 3.15C8.66 2.95 8.34 2.95 8.15 3.15C7.95 3.34 7.95 3.66 8.15 3.85L12.29 8H2.5C2.22 8 2 8.22 2 8.5C2 8.77 2.22 9 2.5 9H12.29L8.15 13.14C7.95 13.34 7.95 13.66 8.15 13.85C8.24 13.95 8.37 14 8.5 14C8.63 14 8.76 13.95 8.86 13.85L13.86 8.85C14.05 8.66 14.05 8.34 13.86 8.14L13.85 8.15Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscArrowRight;
