import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-actions",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrActions {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-width":"2","d":"M12,17.5 C15.04,17.5 17.5,15.04 17.5,12 C17.5,8.96 15.04,6.5 12,6.5 C8.96,6.5 6.5,8.96 6.5,12 C6.5,15.04 8.96,17.5 12,17.5 Z M12,6.5 L12,1 M12,23 L12,17.5 M1,12 L6.5,12 M17.5,12 L23,12 M4.44,4.44 L8.56,8.56 M15.44,15.44 L19.56,19.56 M19.56,4.44 L15.44,8.56 M8.56,15.44 L4.44,19.56"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrActions;
