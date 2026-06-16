import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-square-foot",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsSquareFoot {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m17.66 17.66-1.06 1.06-0.71-0.71 1.06-1.06-1.94-1.94-1.06 1.06-0.71-0.71 1.06-1.06-1.94-1.94-1.06 1.06-0.71-0.71 1.06-1.06L9.7 9.7l-1.06 1.06-0.71-0.71 1.06-1.06-1.94-1.94-1.06 1.06-0.71-0.71 1.06-1.06L4 4v16h16l-2.34-2.34zM7 17v-5.76L12.76 17H7z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsSquareFoot;
