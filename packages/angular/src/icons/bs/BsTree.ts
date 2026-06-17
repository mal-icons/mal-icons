import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-tree",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsTree {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8.420.22a0.50.5 0 0 0-0.83 0l-3 4.5A0.50.5 0 0 0 5 5.5h0.1L3.08 8.74A0.50.5 0 0 0 3.5 9.5h0.19l-1.64 3.28a0.50.5 0 0 0 0.450.72H7V16h2v-2.5h4.5a0.50.5 0 0 0 0.45-0.72L12.31 9.5h0.19a0.50.5 0 0 0 0.42-0.76L10.9 5.5H11a0.50.5 0 0 0 0.42-0.78zM6.44 4.76A0.50.5 0 0 0 6 4.5h-0.07L8 1.4 10.07 4.5H10a0.50.5 0 0 0-0.420.77L11.6 8.5H11.5a0.50.5 0 0 0-0.450.72L12.69 12.5H3.31l1.64-3.28A0.50.5 0 0 0 4.5 8.5h-0.1l2.02-3.23a0.50.5 0 0 0 0.01-0.51"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsTree;
