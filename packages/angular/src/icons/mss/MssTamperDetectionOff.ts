import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-tamper-detection-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssTamperDetectionOff {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M880-275 720-435v111l-60-60v-356H304l-60-60h416q24.75 0 42.38 17.63T720-740v215l160-160v410ZM80-560v-180q0-24 18-42t42-18h19l60 60h-79v180H80Zm360 400v-60h220v-79l60 60v19q0 24-18 42t-42 18H440ZM848-27 39-836l42-42L890-69l-42 42ZM420-540Zm62-22ZM153.24-110Q142-110 130.5-115T111-128L8-231l4-3q4.8-5.33 11.4-8.67Q30-246 38.5-246t17.5 3q9 3 15 10l39 39v-246q0-8.67 6.07-14.33Q122.14-460 130.23-460q8.77 0 14.27 5.67Q150-448.67 150-440v120h30v-180q0-8.67 6.07-14.33Q192.14-520 200.23-520q8.77 0 14.27 5.67Q220-508.67 220-500v180h30v-140q0-8.67 6.07-14.33Q262.14-480 270.23-480q8.77 0 14.27 5.67Q290-468.67 290-460v140h30v-100q0-8.67 6.07-14.33Q332.14-440 340.23-440q8.77 0 14.27 5.67Q360-428.67 360-420v250q0 25-17.25 42.5T300-110H153.24Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssTamperDetectionOff;
