import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-virtual-storage",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrVirtualStorage {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-width":"2","d":"M12,22 C16.97,22 21,19.76 21,17 C21,14.24 16.97,12 12,12 C7.03,12 3,14.24 3,17 C3,19.76 7.03,22 12,22 Z M12,17.5 C16.97,17.5 21,15.26 21,12.5 C21,9.74 16.97,7.5 12,7.5 C7.03,7.5 3,9.74 3,12.5 C3,15.26 7.03,17.5 12,17.5 Z M12,12 C16.97,12 21,9.76 21,7 C21,4.24 16.97,2 12,2 C7.03,2 3,4.24 3,7 C3,9.76 7.03,12 12,12 Z"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrVirtualStorage;
