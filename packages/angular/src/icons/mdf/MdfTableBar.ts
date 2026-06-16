import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-table-bar",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfTableBar {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M22 7.5C22 5.57 17.52 4 12 4S2 5.57 2 7.5c0 1.81 3.95 3.31 9 3.48V15H9.35c-0.82 0-1.550.5-1.86 1.26L6 20h2l1.2-3h5.6l1.2 3h2l-1.5-3.74c-0.3-0.76-1.04-1.26-1.85-1.26H13v-4.02c5.05-0.17 9-1.67 9-3.48z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfTableBar;
