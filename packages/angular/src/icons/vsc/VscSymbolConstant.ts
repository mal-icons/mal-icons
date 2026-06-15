import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-symbol-constant",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscSymbolConstant {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M4.5 2C3.84 2 3.2 2.26 2.73 2.73C2.26 3.2 2 3.84 2 4.5V11.5C2 12.16 2.26 12.8 2.73 13.27C3.2 13.74 3.84 14 4.5 14H11.5C12.16 14 12.8 13.74 13.27 13.27C13.74 12.8 14 12.16 14 11.5V4.5C14 3.84 13.74 3.2 13.27 2.73C12.8 2.26 12.16 2 11.5 2H4.5ZM3 4.5C3 4.1 3.16 3.72 3.44 3.44C3.72 3.16 4.1 3 4.5 3H11.5C11.9 3 12.28 3.16 12.56 3.44C12.84 3.72 13 4.1 13 4.5V11.5C13 11.9 12.84 12.28 12.56 12.56C12.28 12.84 11.9 13 11.5 13H4.5C4.1 13 3.72 12.84 3.44 12.56C3.16 12.28 3 11.9 3 11.5V4.5Z"}],["path",{"d":"M5 6.5C5 6.37 5.05 6.24 5.15 6.15C5.24 6.05 5.37 6 5.5 6H10.5C10.63 6 10.76 6.05 10.85 6.15C10.95 6.24 11 6.37 11 6.5C11 6.63 10.95 6.76 10.85 6.85C10.76 6.95 10.63 7 10.5 7H5.5C5.37 7 5.24 6.95 5.15 6.85C5.05 6.76 5 6.63 5 6.5ZM10.5 9H5.5C5.37 9 5.24 9.05 5.15 9.15C5.05 9.24 5 9.37 5 9.5C5 9.63 5.05 9.76 5.15 9.85C5.24 9.95 5.37 10 5.5 10H10.5C10.63 10 10.76 9.95 10.85 9.85C10.95 9.76 11 9.63 11 9.5C11 9.37 10.95 9.24 10.85 9.15C10.76 9.05 10.63 9 10.5 9Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscSymbolConstant;
