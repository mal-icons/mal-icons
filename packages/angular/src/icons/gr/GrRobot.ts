import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-robot",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrRobot {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-width":"2","d":"M18.35,15.95 C18.77,15.06 19,14.06 19,13 C19,9.13 15.87,6 12,6 C8.13,6 5,9.13 5,13 C5,14.12 5.26,15.17 5.73,16.11 L5.73,16.11 M12,3 C12.55,3 13,2.55 13,2 C13,1.45 12.55,1 12,1 C11.45,1 11,1.45 11,2 C11,2.55 11.45,3 12,3 Z M12,23 C12.55,23 13,22.55 13,22 C13,21.45 12.55,21 12,21 C11.45,21 11,21.45 11,22 C11,22.55 11.45,23 12,23 Z M12,6 L12,3 M9,14 C9.55,14 10,13.55 10,13 C10,12.45 9.55,12 9,12 C8.45,12 8,12.45 8,13 C8,13.55 8.45,14 9,14 Z M15,14 C15.55,14 16,13.55 16,13 C16,12.45 15.55,12 15,12 C14.45,12 14,12.45 14,13 C14,13.55 14.45,14 15,14 Z M6,18.99 L5,16 C5,16 5.07,15.23 5.5,15.5 C6.43,16.09 8.57,17 12,17 C15.55,17 17.62,16.08 18.5,15.5 C18.86,15.26 19,16 19,16 L18,18.99 C18,18.99 17,21 12,21 C7,21 6,18.99 6,18.99 Z"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrRobot;
