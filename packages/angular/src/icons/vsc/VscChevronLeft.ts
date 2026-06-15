import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-chevron-left",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscChevronLeft {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9.15 3.15L4.65 7.65C4.45 7.84 4.45 8.16 4.65 8.35L9.15 12.85C9.34 13.05 9.66 13.05 9.85 12.85C10.05 12.66 10.05 12.34 9.85 12.15L5.71 8L9.85 3.85C10.05 3.66 10.05 3.34 9.85 3.15C9.66 2.95 9.34 2.95 9.15 3.15V3.15Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscChevronLeft;
