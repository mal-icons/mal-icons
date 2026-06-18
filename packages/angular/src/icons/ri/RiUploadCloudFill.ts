import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-upload-cloud-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiUploadCloudFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7 20.98C3.64 20.73 1 17.92 1 14.5C1 12.17 2.22 10.13 4.06 8.98C4.56 5.04 7.93 2 12 2C16.07 2 19.44 5.04 19.94 8.98C21.78 10.13 23 12.17 23 14.5C23 17.92 20.36 20.73 17 20.98V21H7V20.98ZM13 13H16L12 8L8 13H11V17H13V13Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiUploadCloudFill;
