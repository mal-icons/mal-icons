import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-tape-option",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrTapeOption {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-width":"2","d":"M1,2 L22,2 L22,22 L2,22 L2,7 M12,19 C8.13,19 5,15.87 5,12 M12,19 C15.87,19 19,15.87 19,12 C19,8.13 15.87,5 12,5 L1,5 M12,9 C10.35,9 9,10.35 9,12 C9,13.65 10.35,15 12,15 C13.65,15 15,13.65 15,12 C15,10.35 13.65,9 12,9 Z"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrTapeOption;
