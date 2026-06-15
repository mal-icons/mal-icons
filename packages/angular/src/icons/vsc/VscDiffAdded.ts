import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-diff-added",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscDiffAdded {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.5 1H3.5C2.12 1 1 2.12 1 3.5V11.5C1 12.88 2.12 14 3.5 14H11.5C12.88 14 14 12.88 14 11.5V3.5C14 2.12 12.88 1 11.5 1ZM13 11.5C13 12.33 12.33 13 11.5 13H3.5C2.67 13 2 12.33 2 11.5V3.5C2 2.67 2.67 2 3.5 2H11.5C12.33 2 13 2.67 13 3.5V11.5ZM11 7.5C11 7.78 10.78 8 10.5 8H8V10.5C8 10.78 7.78 11 7.5 11C7.22 11 7 10.78 7 10.5V8H4.5C4.22 8 4 7.78 4 7.5C4 7.22 4.22 7 4.5 7H7V4.5C7 4.22 7.22 4 7.5 4C7.78 4 8 4.22 8 4.5V7H10.5C10.78 7 11 7.22 11 7.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscDiffAdded;
