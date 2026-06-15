import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-contact-info",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrContactInfo {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-width":"2","d":"M5,12 C3.34,12 2,10.66 2,9 C2,7.34 3.34,6 5,6 C6.66,6 8,7.34 8,9 C8,10.66 6.66,12 5,12 Z M9,18 L9,16 C9,13.75 7.21,12 4.96,12 L5.02,12 C2.77,12 1,13.75 1,16 L1,18 M12,7 L24,7 M12,17 L22,17 M12,12 L19,12"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrContactInfo;
