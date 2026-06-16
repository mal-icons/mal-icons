import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-all-inbox",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrAllInbox {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M260-260h560v-163H676q-18 40-54.5 63.5T540-336q-45 0-81-23.5T404-423H260v163Zm280-136q31 0 55.5-17.5T627-460q2-11 10.25-17t18.75-6h164v-337H260v337h164q10.5 0 18.75 6T453-460q7 29 32 46.5t55 17.5ZM260-200q-24 0-42-18t-18-42v-560q0-24 18-42t42-18h560q24 0 42 18t18 42v560q0 24-18 42t-42 18H260ZM140-80q-24 0-42-18t-18-42v-590q0-12.75 8.68-21.37 8.68-8.62 21.5-8.62 12.83 0 21.33 8.63T140-730v590h590q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5Q760-97 751.38-88.5T730-80H140Zm120-180h560-560Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrAllInbox;
