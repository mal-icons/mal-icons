import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-timer-3-select",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoTimer3Select {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M160-200v-80h261v-160H162v-80h259v-160H160v-80h261q33.33 0 56.67 23.33Q501-713.33 501-680v131q0 29-19.25 50T435-478q27.5 0 46.75 19.54Q501-438.92 501-411v131q0 33.33-23.33 56.67Q454.33-200 421-200H160Zm440 0v-60h180v-70H642q-17 0-29.5-12.5T600-372v-106q0-17 12.5-29.5T642-520h198v60H660v70h138q17 0 29.5 12.5T840-348v106q0 17-12.5 29.5T798-200H600Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoTimer3Select;
