import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-pivot-table-chart",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoPivotTableChart {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M380-640v-200h400q24 0 42 18t18 42v140H380ZM180-120q-24 0-42-18t-18-42v-400h200v460H180Zm-60-520v-140q0-24 18-42t42-18h140v200H120ZM515-80 361-234l154-154 43 43-81 81h122q42 0 69.5-27.5T696-361v-122l-81 81-43-43 154-154 154 154-43 43-81-81v122q0 66-46 111.5T599-204H477l81 81-43 43Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoPivotTableChart;
