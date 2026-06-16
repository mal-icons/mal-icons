import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-school",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrSchool {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M479-129q-7.59 0-14.79-1.5Q457-132 450-136L220-262q-14-8-22.5-21.87T189-315v-204L88-574q-7.86-4.46-11.43-11.14Q73-591.83 73-600t3.57-14.86Q80.14-621.54 88-626l362-198q6.87-4 14.12-6T479-832q7.63 0 14.88 2T508-824l396 215q8 5 12 11.97 4 6.97 4 15.03v269q0 12.75-8.68 21.38-8.68 8.63-21.5 8.63-12.82 0-21.32-8.62T860-313v-252l-91 46v204q0 17.25-8.5 31.13T738-262L508-136q-7 4-14.21 5.5Q486.59-129 479-129Zm0-299 315-172-315-169-313 169 313 172Zm0 240 230-127v-168L508-375q-7 4-14 5.5t-15 1.5q-8 0-14.5-1.5T451-375L249-485v170l230 127Zm1-240Zm-1 90Zm0 0Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrSchool;
