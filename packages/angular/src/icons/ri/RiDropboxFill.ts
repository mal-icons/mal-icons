import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-dropbox-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiDropboxFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17.28 10.67L22.5 13.99L17.25 17.34L12 13.99L6.75 17.34L1.5 13.99L6.72 10.67L1.5 7.35L6.75 4L12 7.34L17.25 4L22.5 7.35L17.28 10.67ZM17.21 10.67L12 7.35L6.79 10.67L12 13.99L17.21 10.67ZM6.79 18.45L12.04 15.1L17.29 18.45L12.04 21.79L6.79 18.45Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiDropboxFill;
