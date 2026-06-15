import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-blades-vertical",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrBladesVertical {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"stroke":"currentColor","stroke-width":"2","d":"M17 3v4m0 3v4m0 3v4m4-17v2a1 1 0 1-1 1H4a1 1 0 1-1-1V4a1 1 0 11-1h16a1 1 0 11 1zm0 7v2a1 1 0 1-1 1H4a1 1 0 1-1-1v-2a1 1 0 11-1h16a1 1 0 11 1zm0 7v2a1 1 0 1-1 1H4a1 1 0 1-1-1v-2a1 1 0 11-1h16a1 1 0 11 1z"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrBladesVertical;
