import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-detector-alarm",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoDetectorAlarm {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M450-120v-200h60v200h-60Zm327-115L636-376l42-43 141 142-42 42Zm-594 0-42-42 141-142 43 43-142 141Zm-3-545v60h600v-60H180Zm121 120 18 60h322l18-60H301Zm18 120q-19.5 0-35.25-11.62T262-582l-25-78h-57q-24.75 0-42.37-17.62T120-720v-120h720v120q0 25-17.62 42.5T780-660h-57l-30 81q-6.93 17.25-22.34 28.13Q655.26-540 636-540H319ZM180-780v60-60Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoDetectorAlarm;
