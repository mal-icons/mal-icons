import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-clock",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrClock {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M13 7a1 1 0 10-2 0v5a1 1 0 0.40.8l4 3a1 1 0 1.2-1.6L13 11.5V7z"}],["path",{"fill":"currentColor","fill-rule":"evenodd","d":"M12 1C5.93 1 1 5.93 1 12s4.93 11 11 11 11-4.92 11-11S18.08 1 12 1zM3 12a9 9 0 1118 0 9 9 0 1-18 0z","clip-rule":"evenodd"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrClock;
