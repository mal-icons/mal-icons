import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-wb-incandescent",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoWbIncandescent {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M450-80v-118h60v118h-60ZM80-450v-60h118v60H80Zm682 0v-60h118v60H762Zm-23 272-82-82 43-43 82 82-43 43Zm-518 0-43-43 82-82 43 43-82 82Zm259-120q-75 0-128.5-53.5T298-480q0-49 21-88t59-64v-208h204v208q38 25 59 64t21 88q0 75-53.5 128.5T480-298Zm-42-355q10.5-3 21-4.5t21-1.5q10.5 0 21 1.5t21 4.5v-127h-84v127Zm42.12 295Q531-358 566.5-393.62q35.5-35.62 35.5-86.5Q602-531 566.38-566.5q-35.62-35.5-86.5-35.5Q429-602 393.5-566.38q-35.5 35.62-35.5 86.5Q358-429 393.62-393.5q35.62 35.5 86.5 35.5ZM480-480Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoWbIncandescent;
