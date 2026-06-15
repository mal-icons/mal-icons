import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-comment",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscComment {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M1 4.5C1 3.12 2.12 2 3.5 2H12.5C13.88 2 15 3.12 15 4.5V9.5C15 10.88 13.88 12 12.5 12H8.69L5.63 14.68C4.99 15.23 4 14.78 4 13.94V12H3.5C2.12 12 1 10.88 1 9.5V4.5ZM3.5 3C2.67 3 2 3.67 2 4.5V9.5C2 10.33 2.67 11 3.5 11H5V13.9L8.31 11H12.5C13.33 11 14 10.33 14 9.5V4.5C14 3.67 13.33 3 12.5 3H3.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscComment;
