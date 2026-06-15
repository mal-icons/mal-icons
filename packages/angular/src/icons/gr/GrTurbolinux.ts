import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-turbolinux",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrTurbolinux {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","fill-rule":"evenodd","d":"M9.42,6.22 L9.97,7.45 L6.62,7.45 L6,6.22 L9.42,6.22 Z M13.11,12.17 L7.09,0 L14.14,4.17 L14.55,6.15 L17.9,6.15 L17.14,8.21 L14.96,8.21 L16.73,16.48 L12.56,14.43 L14.68,24 L8.19,10.8 L13.11,12.17 Z"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrTurbolinux;
