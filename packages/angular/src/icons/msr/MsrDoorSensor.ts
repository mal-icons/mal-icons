import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-door-sensor",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrDoorSensor {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M340-360v-420 600-180Zm-60 30h60v150h280v-600H340v390h-60v-390q0-24.75 17.63-42.37T340-840h280q24.75 0 42.38 17.63T680-780v600q0 24.75-17.62 42.38T620-120H340q-24.75 0-42.37-17.62T280-180v-150Zm200.5-240q12.5 0 21-9t8.5-21.5q0-12.5-8.62-21T480-630q-12 0-21 8.63T450-600q0 12 9 21t21.5 9ZM810-610q-12 0-21-9t-9-21v-160q0-12.75 9-21.37T810.5-830q12.5 0 21 8.63T840-800v160q0 12-8.62 21T810-610ZM190-330q-12 0-21-9t-9-21.5q0-12.5 9-21t21-8.5h290q12.75 0 21.38 8.63T510-360q0 12-8.62 21T480-330H190Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrDoorSensor;
