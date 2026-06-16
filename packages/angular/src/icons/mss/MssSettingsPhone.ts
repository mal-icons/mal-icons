import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-settings-phone",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssSettingsPhone {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M459-525q-17 0-28.5-11.5T419-565q0-17 11.5-28.5T459-605q17 0 28.5 11.5T499-565q0 17-11.5 28.5T459-525Zm173 0q-16.57 0-27.79-11.5Q593-548 593-565t11.21-28.5Q615.42-605 632-605q17.43 0 29.21 11.5Q673-582 673-565t-11.79 28.5Q649.42-525 632-525Zm177 0q-17.42 0-29.21-11.5Q768-548 768-565t11.79-28.5Q791.58-605 809-605q16.58 0 27.79 11.5Q848-582 848-565t-11.21 28.5Q825.58-525 809-525Zm-21 405q-122 0-242.5-59.5T329-335q-96-96-156-217t-60-243q0-11 1-23t2.81-22H329l40 189-117 118q56 93 125.5 162T535-254l117-121 181 40v212.09Q823-122 810.97-121q-12.03 1-22.97 1ZM222-588l81-82-23-110H173q0 39 12 85.5T222-588Zm369 363q41 19 89 31t93 14v-107l-103-21-79 83ZM222-588Zm369 363Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssSettingsPhone;
