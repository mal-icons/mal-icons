import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-mail-download-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiMailDownloadFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M22 12.8C21.12 12.29 20.09 12 19 12C15.69 12 13 14.69 13 18C13 19.09 13.29 20.12 13.8 21H3C2.45 21 2 20.55 2 20V4C2 3.45 2.45 3 3 3H21C21.55 3 22 3.45 22 4V12.8ZM12.06 11.68L5.65 6.24L4.35 7.76L12.07 14.32L19.65 7.76L18.35 6.24L12.06 11.68ZM20 18H23L19 22L15 18H18V14H20V18Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiMailDownloadFill;
