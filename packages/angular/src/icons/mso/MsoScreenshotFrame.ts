import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-screenshot-frame",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoScreenshotFrame {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M200-690v-130q0-24 18-42t42-18h130v60H260v130h-60Zm60 610q-24 0-42-18t-18-42v-130h60v130h130v60H260Zm440-610v-130H570v-60h130q24 0 42 18t18 42v130h-60ZM570-80v-60h130v-130h60v130q0 24-18 42t-42 18H570Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoScreenshotFrame;
