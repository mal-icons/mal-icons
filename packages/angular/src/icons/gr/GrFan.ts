import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-fan",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrFan {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-width":"2","d":"M12,15 C13.66,15 15,13.66 15,12 C15,10.34 13.66,9 12,9 C10.34,9 9,10.34 9,12 C9,13.66 10.34,15 12,15 Z M15,12 C19,15 20,19 20,19 M12,23 C18.08,23 23,18.08 23,12 C23,5.92 18.08,1 12,1 C5.92,1 1,5.92 1,12 C1,18.08 5.92,23 12,23 Z M12,9 C15,4 19,3 19,3 M12,15 C9,19 5,20 5,20 M9,12 C5,9 4,5 4,5"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrFan;
