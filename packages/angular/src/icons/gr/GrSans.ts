import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-sans",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrSans {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"stroke":"currentColor","stroke-width":"2","d":"M1 12h22M2 22h20a1 1 0 1-1V3a1 1 0 0-1-1H2a1 1 0 0-1 1v18a1 1 0 1 1zM5 8a1 1 0 100-2 1 1 0 0 2zm0 10a1 1 0 100-2 1 1 0 0 2z"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrSans;
