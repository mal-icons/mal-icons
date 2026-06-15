import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-hi-signal",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class HiSignal {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"stroke-linecap":"round","stroke-linejoin":"round","d":"M9.35 14.65a3.75 3.75 0 0 1 0-5.3m5.3 0a3.75 3.75 0 0 1 0 5.3m-7.42 2.12a6.75 6.75 0 0 1 0-9.55m9.55 0a6.75 6.75 0 0 1 0 9.55M5.11 18.89c-3.81-3.81-3.81-9.98 0-13.79m13.79 0c3.81 3.81 3.81 9.98 0 13.79M12 12h0.01v0.01H12V12Zm0.38 0a0.380.38 0 1 1-0.75 0 0.380.38 0 0 1 0.75 0Z"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":1.5};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default HiSignal;
