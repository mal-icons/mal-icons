import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-plug",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrPlug {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"stroke":"currentColor","stroke-width":"2","d":"M15 6V1m-3 23v-9M9 6V1M6 6h12v7a2 2 0 1-2 2H8a2 2 0 1-2-2V6z"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrPlug;
