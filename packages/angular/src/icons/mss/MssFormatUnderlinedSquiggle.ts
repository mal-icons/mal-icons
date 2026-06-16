import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-format-underlined-squiggle",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssFormatUnderlinedSquiggle {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M293-120q-14 0-28.5-5T239-138q-9-6-18.5-14t-20.5-8h-30v-60h30q14 0 28.5 5t25.5 13q9 6 18.5 14t20.5 8q11 0 21-7.5t19-14.5q11-8 25.5-13t28.5-5q14 0 28.5 5t25.5 13q9 6 18.5 14t20.5 8q11 0 21-7.5t19-14.5q11-8 25.5-13t28.5-5q14 0 28.5 5t25.5 13q9 6 19 14t21 8q11 0 20.5-7.5T707-202q11-8 25.5-13t28.5-5h30v60h-30q-11 0-21 7.5T721-138q-11 8-26 13t-29 5q-14 0-28-5t-25-13q-9-7-19-14.5t-21-7.5q-11 0-21 7.5T533-138q-11 8-25.5 13t-28.5 5q-14 0-28.5-5T425-138q-9-6-18.5-14t-20.5-8q-11 0-21 7.5T346-138q-11 8-25.5 13t-27.5 5Zm187-180q-101 0-170.5-69T240-538v-322h80v324q0 66 46 111t114 45q68 0 114-45t46-111v-324h80v322q0 100-69.5 169T480-300Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssFormatUnderlinedSquiggle;
