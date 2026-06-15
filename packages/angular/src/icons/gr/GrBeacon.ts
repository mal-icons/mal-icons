import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-beacon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrBeacon {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"stroke":"currentColor","stroke-width":"2","d":"M12 12a3 3 0 100-6 3 3 0 0 6zm0 0v11M7.05 4.05A6.98 6.98 0 5 9c0 1.930.78 3.68 2.05 4.95m9.9 0A6.98 6.98 0 19 9a6.98 6.98 0 0-2.05-4.95M4.22 1.22A10.97 10.97 0 1 9c0 3.04 1.23 5.79 3.22 7.78m15.56 0A10.97 10.97 0 23 9c0-3.04-1.23-5.79-3.22-7.78"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrBeacon;
