import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-pie-chart",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtPieChart {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 12c0 4.07 3.06 7.44 7 7.93V4.07C7.06 4.56 4 7.93 4 12zm9 7.93A8 8 0 0 0 19.93 13H13v6.93zm0-15.86V11h6.93A8 8 0 0 0 13 4.07z","opacity":".3"}],["path",{"d":"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-0.49-7-3.86-7-7.93s3.06-7.44 7-7.93v15.86zm2 0V13h6.93A8 8 0 0 1 13 19.93zM13 11V4.07c3.610.45 6.48 3.32 6.93 6.93H13z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtPieChart;
