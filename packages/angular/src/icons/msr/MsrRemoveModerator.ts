import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-remove-moderator",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrRemoveModerator {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m743-295-45-46q20-35 31-89.5t11-93.5v-196l-260-96-188 69-46-46 213-80q11-4 21-4t21 4l260 96q17.25 6.93 28.13 22.34Q800-739.26 800-720v196q0 59.44-15 117.72Q770-348 743-295ZM480-84q-7 0-19-4-140-50-220.5-169T160-524v-183l-84-84q-9-9-9-21.5t9-21.5q9-9 21.5-9t21.5 9l713 713q9 9 8.5 21.5T831-78q-9 9-21 9t-21-9L670-195q-38 38-78.5 64.5T500-87q-5 1.5-10 2.25T480-84Zm-54-356Zm73-101Zm-19 398q42.07-14.02 80.54-39.51Q599-208 628-238L220-647v123q0 130.1 73 236.55Q366-181 480-143Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrRemoveModerator;
