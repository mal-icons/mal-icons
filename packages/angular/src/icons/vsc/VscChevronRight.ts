import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-chevron-right",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscChevronRight {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6.15 3.15C5.95 3.34 5.95 3.66 6.15 3.85L10.29 8L6.15 12.14C5.95 12.34 5.95 12.66 6.15 12.85C6.34 13.05 6.66 13.05 6.85 12.85L11.35 8.35C11.55 8.16 11.55 7.84 11.35 7.64L6.85 3.14C6.66 2.95 6.34 2.95 6.15 3.15Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscChevronRight;
