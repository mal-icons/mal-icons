import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-fold",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscFold {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.85 3.35L8.35 6.85C8.16 7.05 7.84 7.05 7.65 6.85L4.15 3.35C3.95 3.16 3.95 2.84 4.15 2.65C4.34 2.45 4.66 2.45 4.85 2.65L8 5.79L11.15 2.65C11.34 2.45 11.66 2.45 11.85 2.65C12.05 2.84 12.05 3.16 11.85 3.35ZM11.85 12.65L8.35 9.15C8.16 8.95 7.84 8.95 7.65 9.15L4.15 12.65C3.95 12.84 3.95 13.16 4.15 13.35C4.34 13.55 4.66 13.55 4.85 13.35L8 10.21L11.15 13.35C11.34 13.55 11.66 13.55 11.85 13.35C12.05 13.16 12.05 12.84 11.85 12.65Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscFold;
