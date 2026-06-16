import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-ramp-left",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrRampLeft {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M482-120q-13 0-21.5-8.5T452-150v-576l-69 69q-9 9-21 9t-21-9q-9-9-9-21t9-21l120-120q5-5 10-7t11-2q6 0 11 2t10 7l120 120q9 9 9 21t-9 21q-9 9-21 9t-21-9l-69-69v146q0 95 51 161.5T722-283q13 8 14.5 22t-9.5 25q-6 6-16 8t-18-3q-58-33-104-73.5T512-387v237q0 13-8.5 21.5T482-120Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrRampLeft;
