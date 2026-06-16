import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-detector-offline",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrDetectorOffline {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m480-224-83 83q-9 9-21 9t-21-9q-9-9-9-21t9-21l83-83-83-83q-9-9-9-21t9-21q9-9 21-9t21 9l83 83 83-83q9-9 21-9t21 9q9 9 9 21t-9 21l-83 83 83 83q9 9 9 21t-9 21q-9 9-21 9t-21-9l-83-83ZM180-780v60h600v-60H180Zm121 120 18 60h322l18-60H301Zm18 120q-19.5 0-35.25-11.62T262-582l-25-78h-57q-24.75 0-42.37-17.62T120-720v-120h720v120q0 25-17.62 42.5T780-660h-57l-30 81q-6.93 17.25-22.34 28.13Q655.26-540 636-540H319ZM180-780v60-60Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrDetectorOffline;
