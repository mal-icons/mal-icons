import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-memory",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrMemory {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"stroke":"currentColor","stroke-width":"2","d":"M10 18h4m-4-4h4m-4-4h4m-4-4h4m6 12h3m-3-4h3m-3-4h3m-3-4h3M1 18h3m-3-4h3m-3-4h3M1 6h3m11 14h4a1 1 0 1-1V5a1 1 0 0-1-1h-4a1 1 0 0-1 1v14a1 1 0 1 1zM5 20h4a1 1 0 1-1V5a1 1 0 0-1-1H5a1 1 0 0-1 1v14a1 1 0 1 1z"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrMemory;
