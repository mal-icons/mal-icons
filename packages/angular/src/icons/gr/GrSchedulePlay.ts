import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-schedule-play",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrSchedulePlay {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-width":"2","d":"M14,0 L14,3 M1,7 L19,7 M6,0 L6,3 M4,11 L6,11 M8,11 L16,11 M4,15 L6,15 M8,15 L14,15 M13,19 L1,19 L1,3 L19,3 L19,13 M18,23 C20.76,23 23,20.76 23,18 C23,15.24 20.76,13 18,13 C15.24,13 13,15.24 13,18 C13,20.76 15.24,23 18,23 Z M17.5,17 L19,18 L17.5,19 L17.5,17 Z"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrSchedulePlay;
