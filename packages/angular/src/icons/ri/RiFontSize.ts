import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-font-size",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiFontSize {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.25 15H4.75L2.75 20H0.6L7 4H9L15.4 20H13.25L11.25 15ZM10.45 13L8 6.89L5.55 13H10.45ZM21 12.54V12H23V20H21V19.46C20.41 19.81 19.73 20 19 20C16.79 20 15 18.21 15 16C15 13.79 16.79 12 19 12C19.73 12 20.41 12.19 21 12.54ZM19 18C20.1 18 21 17.1 21 16C21 14.9 20.1 14 19 14C17.9 14 17 14.9 17 16C17 17.1 17.9 18 19 18Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiFontSize;
