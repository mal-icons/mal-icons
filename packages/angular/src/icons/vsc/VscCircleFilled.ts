import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-circle-filled",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscCircleFilled {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 4C8.37 4 8.72 4.05 9.06 4.14C9.4 4.24 9.72 4.37 10.02 4.55C10.31 4.72 10.58 4.93 10.82 5.18C11.07 5.42 11.28 5.69 11.45 5.98C11.63 6.28 11.76 6.6 11.86 6.94C11.95 7.28 12 7.63 12 8C12 8.37 11.95 8.72 11.86 9.06C11.76 9.4 11.63 9.72 11.45 10.02C11.28 10.31 11.07 10.58 10.82 10.83C10.58 11.07 10.31 11.28 10.02 11.45C9.72 11.63 9.4 11.76 9.06 11.86C8.72 11.95 8.37 12 8 12C7.63 12 7.28 11.95 6.94 11.86C6.6 11.76 6.28 11.63 5.98 11.45C5.69 11.28 5.42 11.07 5.17 10.83C4.93 10.58 4.72 10.31 4.55 10.02C4.37 9.72 4.24 9.4 4.14 9.06C4.05 8.72 4 8.37 4 8C4 7.63 4.05 7.28 4.14 6.94C4.24 6.6 4.37 6.28 4.55 5.98C4.72 5.69 4.93 5.42 5.17 5.18C5.42 4.93 5.69 4.72 5.98 4.55C6.28 4.37 6.6 4.24 6.94 4.14C7.28 4.05 7.63 4 8 4Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscCircleFilled;
