import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-archive",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoArchive {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M180-120q-24 0-42-18t-18-42v-523q0-15 3-25.5t11-19.5l56-76q8-9 18.5-12.5t24.89-3.5h493.23Q741-840 751-836.5t18 12.5l57 76q8 9 11 19.5t3 25.5v523q0 24-18 42t-42 18H180Zm17-614h565l-36.41-46H233l-36 46Zm-17 60v494h600v-494H180Zm300 404 156-156-40-40-86 86v-201h-60v201l-86-86-40 40 156 156Zm-300 90h600-600Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoArchive;
