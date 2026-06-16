import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-timer-10-select",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoTimer10Select {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M367-280h177v-400H367v400Zm0 80q-33.33 0-56.67-23.33Q287-246.67 287-280v-400q0-33.33 23.33-56.67Q333.67-760 367-760h177q33.33 0 56.67 23.33Q624-713.33 624-680v400q0 33.33-23.33 56.67Q577.33-200 544-200H367Zm-240 0v-480H40v-80h167v560h-80Zm567 0v-60h166v-70H736q-17 0-29.5-12.5T694-372v-106q0-17 12.5-29.5T736-520h184v60H754v70h124q17 0 29.5 12.5T920-348v106q0 17-12.5 29.5T878-200H694Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoTimer10Select;
