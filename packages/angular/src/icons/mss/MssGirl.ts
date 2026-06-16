import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-girl",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssGirl {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M479.9-680Q455-680 437.5-697.6t-17.5-42.5Q420-765 437.6-782.5t42.5-17.5Q505-800 522.5-782.4t17.5 42.5Q540-715 522.4-697.5t-42.5 17.5ZM420-160v-180h-71l85-248q5-14 17.63-23 12.63-9 28.5-9 15.87 0 28.37 9 12.5 9 17.5 23l85 248h-71v180H420Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssGirl;
