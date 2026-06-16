import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-arrow-forward",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrArrowForward {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M459-182q-8-8-8-21t8-21l226-226H190q-13 0-21.5-8.5T160-480q0-13 8.5-21.5T190-510h495L459-736q-8-8-8-21.5t8-21.5q8-8 21-8t21 8l278 278q5 5 7 10t2 11q0 5-2 10.5t-7 10.5L501-181q-8 8-21 7.5t-21-8.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrArrowForward;
