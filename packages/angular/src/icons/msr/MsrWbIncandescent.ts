import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-wb-incandescent",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrWbIncandescent {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M479.83-80Q467-80 458.5-88.62T450-110v-58q0-12.75 8.68-21.37 8.68-8.62 21.5-8.62 12.83 0 21.33 8.63T510-168v58q0 12.75-8.68 21.38Q492.65-80 479.83-80ZM110-450q-12.75 0-21.37-8.68Q80-467.35 80-480.17 80-493 88.63-501.5T110-510h58q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T168-450h-58Zm682 0q-12.75 0-21.37-8.68-8.62-8.68-8.62-21.5 0-12.82 8.63-21.32T792-510h58q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T850-450h-58Zm-74 250-40-39q-8-8-8.5-21t8.5-22q9-9 21.5-9t21.5 9l40 40q8 8 8.5 20.5T761-200q-9 9-21.5 9t-21.5-9Zm-518 0q-9-9-9-21.5t9-21.5l39-39q8-8 21-8.5t22 8.5q9 9 9 21.5t-9 21.5l-40 40q-8.44 8-20.72 8T200-200Zm280-98q-75 0-128.5-53.5T298-480q0-49 21-88t59-64v-148q0-24.75 17.63-42.37T438-840h84q24.75 0 42.38 17.63T582-780v148q38 25 59 64t21 88q0 75-53.5 128.5T480-298Zm-42-355q10.5-3 21-4.5t21-1.5q10.5 0 21 1.5t21 4.5v-127h-84v127Zm42.12 295Q531-358 566.5-393.62q35.5-35.62 35.5-86.5Q602-531 566.38-566.5q-35.62-35.5-86.5-35.5Q429-602 393.5-566.38q-35.5 35.62-35.5 86.5Q358-429 393.62-393.5q35.62 35.5 86.5 35.5ZM480-480Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrWbIncandescent;
