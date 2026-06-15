import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-symbol-method",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscSymbolMethod {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4.7 5.04C4.44 4.93 4.15 5.05 4.04 5.3C3.93 5.56 4.05 5.85 4.3 5.96L7.5 7.33V10.5C7.5 10.78 7.72 11 8 11C8.28 11 8.5 10.78 8.5 10.5V7.33L11.7 5.96C11.95 5.85 12.07 5.56 11.96 5.3C11.85 5.05 11.56 4.93 11.3 5.04L8 6.46L4.7 5.04ZM9.08 1.38C8.38 1.11 7.62 1.11 6.92 1.38L1.96 3.29C1.38 3.51 1 4.07 1 4.69V11.31C1 11.93 1.38 12.49 1.96 12.71L6.92 14.62C7.62 14.89 8.38 14.89 9.08 14.62L14.04 12.71C14.62 12.49 15 11.93 15 11.31V4.69C15 4.07 14.62 3.51 14.04 3.29L9.08 1.38ZM7.28 2.31C7.74 2.13 8.26 2.13 8.72 2.31L13.68 4.22C13.87 4.29 14 4.48 14 4.69V11.31C14 11.52 13.87 11.71 13.68 11.78L8.72 13.69C8.26 13.87 7.74 13.87 7.28 13.69L2.32 11.78C2.13 11.71 2 11.52 2 11.31V4.69C2 4.48 2.13 4.29 2.32 4.22L7.28 2.31Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscSymbolMethod;
