import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-achievement",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrAchievement {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-width":"2","d":"M10.32,14.76 C7.83,14.04 6,11.73 6,9 L6,1 L18,1 L18,10 M6,3 L1,3 L1,7 C1,9.51 2.79,11 5,11 L6,11 M20.03,10.88 C21.74,10.49 23,9.1 23,7 L23,3 L18,3 M10,19 L5,19 L5,23 L16.5,23 M16.5,10 C12.91,10 10,12.91 10,16.5 C10,20.09 12.91,23 16.5,23 C20.09,23 23,20.09 23,16.5 C23,12.91 20.09,10 16.5,10 L16.5,10 Z M20,14 L15.5,18.5 L13,16 M10.21,15.42 C8.9,16.08 8,17.44 8,19"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrAchievement;
