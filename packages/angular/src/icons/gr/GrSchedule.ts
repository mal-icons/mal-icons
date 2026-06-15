import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-schedule",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrSchedule {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-width":"2","d":"M1,23 L23,23 L23,4 L1,4 L1,23 Z M18,4 L18,0 L18,4 Z M6,4 L6,0 L6,4 Z M1,8.5 L23,8.5 L1,8.5 Z M6,14 C6.56,12.67 7.39,12 8.5,12 C9.8,12 10.5,13 10.5,14 C10.5,15 9.5,16 8.5,17 C8.11,17.39 7.45,18.05 6.5,19 L6.5,19.5 L11.9,19.5 M16.98,20.5 L17,12 L16.5,12 C16,13.5 14.5,14 13.76,14"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrSchedule;
