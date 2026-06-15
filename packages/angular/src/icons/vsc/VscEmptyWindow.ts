import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-empty-window",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscEmptyWindow {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M15 4V12C15 13.66 13.66 15 12 15H4C2.34 15 1 13.66 1 12V8.74C1.31 8.99 1.64 9.21 2 9.39V12C2 13.11 2.9 14 4 14H12C13.11 14 14 13.11 14 12V5H9.98C9.99 4.84 10 4.67 10 4.5C10 4.33 9.99 4.17 9.98 4H14C14 2.9 13.11 2 12 2H9.39C9.21 1.64 8.99 1.31 8.74 1H12C13.66 1 15 2.34 15 4ZM0 4.5C0 2.02 2.02 0 4.5 0C6.99 0 9 2.02 9 4.5C9 6.99 6.99 9 4.5 9C2.02 9 0 6.99 0 4.5ZM1.5 4.5C1.5 4.78 1.72 5 2 5H4V7C4 7.28 4.22 7.5 4.5 7.5C4.78 7.5 5 7.28 5 7V5H7C7.28 5 7.5 4.78 7.5 4.5C7.5 4.22 7.28 4 7 4H5V2C5 1.72 4.78 1.5 4.5 1.5C4.22 1.5 4 1.72 4 2V4H2C1.72 4 1.5 4.22 1.5 4.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscEmptyWindow;
