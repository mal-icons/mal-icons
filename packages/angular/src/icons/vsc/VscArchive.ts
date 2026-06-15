import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-archive",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscArchive {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6.5 8C6.22 8 6 8.22 6 8.5C6 8.78 6.22 9 6.5 9H9.5C9.78 9 10 8.78 10 8.5C10 8.22 9.78 8 9.5 8H6.5ZM1 3.5C1 2.67 1.67 2 2.5 2H13.5C14.33 2 15 2.67 15 3.5V4.5C15 5.15 14.58 5.71 14 5.91V11.5C14 12.88 12.88 14 11.5 14H4.5C3.12 14 2 12.88 2 11.5V5.91C1.42 5.71 1 5.15 1 4.5V3.5ZM2.5 3C2.22 3 2 3.22 2 3.5V4.5C2 4.78 2.22 5 2.5 5H13.5C13.78 5 14 4.78 14 4.5V3.5C14 3.22 13.78 3 13.5 3H2.5ZM3 6V11.5C3 12.33 3.67 13 4.5 13H11.5C12.33 13 13 12.33 13 11.5V6H3Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscArchive;
