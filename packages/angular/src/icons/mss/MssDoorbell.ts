import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-doorbell",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssDoorbell {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M480-270q13 0 23-8.5t12-21.5h-70q2 13 12 21.5t23 8.5Zm-155-50h310v-30h-40v-99q0-42.6-24-77.46-24-34.86-66-44.54v-39h-50v39q-42 9.68-66 44.54T365-449v99h-40v30ZM160-120v-480l320-240 320 240v480H160Zm60-60h520v-394L480-763 220-574v394Zm260-296Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssDoorbell;
