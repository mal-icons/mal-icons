import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-pan",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrPan {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-width":"2","d":"M8.5,5.5 L12,2 L15.5,5.5 M22,12 L2,12 M5.5,8.5 L2,12 L5.5,15.5 M18.5,15.5 L22,12 L18.5,8.5 M12,22 L12,2 M8.5,18.5 L12,22 L15.5,18.5"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrPan;
