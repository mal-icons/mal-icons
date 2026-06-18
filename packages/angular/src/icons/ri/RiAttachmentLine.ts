import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-attachment-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiAttachmentLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14 13.5V8C14 5.79 12.21 4 10 4C7.79 4 6 5.79 6 8V13.5C6 17.09 8.91 20 12.5 20C16.09 20 19 17.09 19 13.5V4H21V13.5C21 18.19 17.19 22 12.5 22C7.81 22 4 18.19 4 13.5V8C4 4.69 6.69 2 10 2C13.31 2 16 4.69 16 8V13.5C16 15.43 14.43 17 12.5 17C10.57 17 9 15.43 9 13.5V8H11V13.5C11 14.33 11.67 15 12.5 15C13.33 15 14 14.33 14 13.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiAttachmentLine;
