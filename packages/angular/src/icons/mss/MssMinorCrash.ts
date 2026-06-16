import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-minor-crash",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssMinorCrash {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M320-728 214-834l42-42 106 106-42 42Zm320 0-42-42 106-106 42 42-106 106Zm-190-52v-180h60v180h-60ZM120 0v-354l95-286h530l95 286V0h-80v-84H200V0h-80Zm83-414h554l-55-166H258l-55 166Zm-23 270v-210 210Zm105.77-50Q309-194 324.5-209.75T340-248q0-23.33-15.75-39.67Q308.5-304 286-304q-23.33 0-39.67 16.27Q230-271.47 230-248.23 230-225 246.27-209.5q16.26 15.5 39.5 15.5ZM675-194q23.33 0 39.67-15.75Q731-225.5 731-248q0-23.33-16.26-39.67Q698.47-304 675.24-304 652-304 636.5-287.73q-15.5 16.26-15.5 39.5Q621-225 636.75-209.5T675-194Zm-495 50h600v-210H180v210Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssMinorCrash;
