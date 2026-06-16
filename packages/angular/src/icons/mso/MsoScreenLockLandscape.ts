import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-screen-lock-landscape",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoScreenLockLandscape {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M390-320q-13 0-21.5-8.5T360-350v-140q0-13 8.5-21.5T390-520h10v-40q0-33 23.5-56.5T480-640q33 0 56.5 23.5T560-560v40h10q13 0 21.5 8.5T600-490v141q0 11.94-8.82 20.47Q582.35-320 570-320H390Zm40-200h100v-40q0-20-15-33.5T480-607q-20 0-35 13.51-15 13.51-15 33.49v40ZM100-200q-24 0-42-18t-18-42v-440q0-24 18-42t42-18h760q24 0 42 18t18 42v440q0 24-18 42t-42 18H100Zm30-60v-440h-30v440h30Zm60 0h580v-440H190v440Zm640 0h30v-440h-30v440ZM130-700h-30 30Zm700 0h30-30Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoScreenLockLandscape;
