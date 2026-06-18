import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-reply-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiReplyLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11 20L1 12L11 4V9C16.52 9 21 13.48 21 19C21 19.27 20.99 19.54 20.97 19.81C19.51 17.04 16.64 15.12 13.31 15.01L13 15H11L11 20ZM9 13H11L13.03 13L13.38 13.01C14.67 13.05 15.91 13.32 17.06 13.77C15.59 12.07 13.42 11 11 11H9V8.16L4.2 12L9 15.84L9 13Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiReplyLine;
