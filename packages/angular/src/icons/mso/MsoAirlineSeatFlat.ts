import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-airline-seat-flat",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoAirlineSeatFlat {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M360-400v-280h368q63 0 107 44t44 107v129H360Zm60-220v160-160ZM80-280v-60h800v60H80Zm120-120q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-60q25.5 0 42.75-17.25T260-520q0-25.5-17.25-42.75T200-580q-25.5 0-42.75 17.25T140-520q0 25.5 17.25 42.75T200-460Zm220 0h399v-69q0-37.54-26.73-64.27Q765.54-620 728-620H420v160Zm-220-60Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoAirlineSeatFlat;
