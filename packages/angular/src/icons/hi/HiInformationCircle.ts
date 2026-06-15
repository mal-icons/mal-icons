import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-hi-information-circle",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class HiInformationCircle {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"stroke-linecap":"round","stroke-linejoin":"round","d":"m11.25 11.250.04-0.02a0.750.75 0 0 1 1.060.85l-0.71 2.84a0.750.75 0 0 0 1.060.85l0.04-0.02M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h0.01v0.01H12V8.25Z"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":1.5};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default HiInformationCircle;
