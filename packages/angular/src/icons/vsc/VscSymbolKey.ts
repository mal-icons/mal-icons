import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-symbol-key",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscSymbolKey {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M8 5.5C7.63 5.5 7.3 5.62 7 5.81V4.5C7 4.22 6.78 4 6.5 4C6.22 4 6 4.22 6 4.5V9.5C6 9.78 6.22 10 6.5 10C6.72 10 6.9 9.86 6.97 9.67C7.27 9.87 7.62 10 8 10C9.1 10 10 8.99 10 7.75C10 6.51 9.1 5.5 8 5.5ZM8 9C7.45 9 7 8.44 7 7.75C7 7.06 7.45 6.5 8 6.5C8.55 6.5 9 7.06 9 7.75C9 8.44 8.55 9 8 9Z"}],["path",{"d":"M12.75 10C11.65 10 10.75 8.99 10.75 7.75C10.75 6.51 11.65 5.5 12.75 5.5C12.89 5.5 14 5.61 14 6.24C14 6.51 13.78 6.74 13.5 6.74C13.37 6.74 13.28 6.69 13.19 6.63C13.08 6.57 12.96 6.5 12.75 6.5C12.2 6.5 11.75 7.06 11.75 7.75C11.75 8.44 12.2 9 12.75 9C12.96 9 13.08 8.93 13.19 8.87C13.28 8.82 13.37 8.77 13.5 8.77C13.78 8.77 14 8.99 14 9.26C14 9.9 12.89 10 12.75 10Z"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M1.9 5.65C1.99 5.55 2.36 5.25 3.25 5.25C4.12 5.25 5 5.77 5 6.75V9.5C5 9.78 4.78 10 4.5 10C4.36 10 4.24 9.94 4.15 9.85C3.91 9.94 3.62 10 3.25 10C1.94 10 1.25 9.25 1.25 8.5C1.25 7.75 1.94 7 3.25 7C3.55 7 3.8 7.02 4 7.06V6.75C4 6.26 3.28 6.25 3.25 6.25C2.79 6.25 2.6 6.36 2.58 6.38L2.58 6.38C2.38 6.57 2.08 6.56 1.88 6.37C1.69 6.17 1.7 5.84 1.9 5.65ZM3.25 8C2.6 8 2.25 8.26 2.25 8.5C2.25 8.74 2.6 9 3.25 9C3.7 9 3.91 8.89 4 8.81V8.07C3.86 8.04 3.62 8 3.25 8Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscSymbolKey;
