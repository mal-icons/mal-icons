import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-webcam-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiWebcamLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11 21V19.93C7.61 19.44 5 16.53 5 13V8C5 4.13 8.13 1 12 1C15.87 1 19 4.13 19 8V13C19 16.53 16.39 19.44 13 19.93V21H17V23H7V21H11ZM12 3C9.24 3 7 5.24 7 8V13C7 15.76 9.24 18 12 18C14.76 18 17 15.76 17 13V8C17 5.24 14.76 3 12 3ZM12 9C12.55 9 13 8.55 13 8C13 7.45 12.55 7 12 7C11.45 7 11 7.45 11 8C11 8.55 11.45 9 12 9ZM12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiWebcamLine;
