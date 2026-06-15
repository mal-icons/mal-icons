import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-newline",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscNewline {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14 3.5V6.5C14 7.88 12.88 9 11.5 9H3.71L6.35 11.65C6.55 11.84 6.55 12.16 6.35 12.35C6.26 12.45 6.13 12.5 6 12.5C5.87 12.5 5.74 12.45 5.65 12.35L2.15 8.85C1.95 8.66 1.95 8.34 2.15 8.15L5.65 4.65C5.84 4.45 6.16 4.45 6.35 4.65C6.55 4.84 6.55 5.16 6.35 5.35L3.71 8H11.5C12.33 8 13 7.33 13 6.5V3.5C13 3.22 13.22 3 13.5 3C13.78 3 14 3.22 14 3.5L14 3.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscNewline;
