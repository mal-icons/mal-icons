import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-status-unknown",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrStatusUnknown {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-width":"2","d":"M2,3.99 C2,2.89 2.9,2 3.99,2 L20.01,2 C21.11,2 22,2.9 22,3.99 L22,20.01 C22,21.11 21.1,22 20.01,22 L3.99,22 C2.89,22 2,21.1 2,20.01 L2,3.99 Z M12,15 L12,14 C12,13 12,12.5 13,12 C14,11.5 15,11 15,9.5 C15,8.5 14,7 12,7 C10,7 9,8.26 9,10 M12,16 L12,18"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrStatusUnknown;
