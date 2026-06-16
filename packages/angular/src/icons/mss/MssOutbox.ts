import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-outbox",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssOutbox {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M453-422v-189l-79 79-43-43 152-152 152 152-43 43-79-79v189h-60ZM120-120v-720h720v720H120Zm60-60h600v-136H634q-26 40-67.5 61.5T480-233q-45 0-86.5-21.5T326-316H180v136Zm300-113q41 0 74-23.5t56-59.5h170v-404H180v404h170q23 36 56 59.5t74 23.5ZM180-180h600-600Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssOutbox;
