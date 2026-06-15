import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-run-with-deps",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscRunWithDeps {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6.21 12.5C6.17 12.39 6.14 12.28 6.11 12.17L4.75 12.94C4.41 13.12 4 12.88 4 12.5V3.5C4 3.12 4.41 2.88 4.75 3.06L12.75 7.56C12.92 7.66 13 7.83 13 8H14C14 7.49 13.75 6.98 13.24 6.69L5.24 2.19C4.24 1.63 3 2.35 3 3.5V12.5C3 13.65 4.24 14.37 5.24 13.81L6.01 13.37C6.03 13.07 6.09 12.77 6.21 12.5V12.5Z"}],["path",{"d":"M16 10.5C16 9.67 15.33 9 14.5 9H8.5C7.67 9 7 9.67 7 10.5V11.5C7 11.89 7.15 12.23 7.39 12.5C7.15 12.77 7 13.11 7 13.5V14.5C7 15.33 7.67 16 8.5 16H10.5C10.89 16 11.23 15.85 11.5 15.61C11.77 15.85 12.11 16 12.5 16H14.5C15.33 16 16 15.33 16 14.5V13.5C16 13.11 15.85 12.77 15.61 12.5C15.85 12.23 16 11.89 16 11.5V10.5ZM8 10.5C8 10.23 8.22 10 8.5 10H14.5C14.78 10 15 10.23 15 10.5V11.5C15 11.78 14.78 12 14.5 12H8.5C8.22 12 8 11.78 8 11.5V10.5ZM10.5 15H8.5C8.22 15 8 14.78 8 14.5V13.5C8 13.23 8.22 13 8.5 13H11V14.5C11 14.78 10.78 15 10.5 15ZM15 14.5C15 14.78 14.78 15 14.5 15H12.5C12.22 15 12 14.78 12 14.5V13H14.5C14.78 13 15 13.23 15 13.5V14.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscRunWithDeps;
