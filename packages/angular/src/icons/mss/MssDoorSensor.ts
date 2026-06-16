import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-door-sensor",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssDoorSensor {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M340-360v-420 600-180Zm-60 30h60v150h280v-600H340v390h-60v-450h400v720H280v-210Zm200.5-240q12.5 0 21-9t8.5-21.5q0-12.5-8.62-21T480-630q-12 0-21 8.63T450-600q0 12 9 21t21.5 9ZM780-610v-220h60v220h-60ZM160-330v-60h350v60H160Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssDoorSensor;
