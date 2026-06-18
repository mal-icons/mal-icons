import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-image-edit-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiImageEditLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20 3C20.55 3 21 3.45 21 4V5.76L19 7.76V5H5V13.1L9 9.1L13.33 13.43L11.91 14.84L9 11.93L5 15.93V19H15.53L16.24 19L17.57 17.67L18.9 19H19V16.24L21 14.24V20C21 20.55 20.55 21 20 21H4C3.45 21 3 20.55 3 20V4C3 3.45 3.45 3 4 3H20ZM21.78 7.81L23.19 9.22L15.41 17L14 17L14 15.59L21.78 7.81ZM15.5 7C16.33 7 17 7.67 17 8.5C17 9.33 16.33 10 15.5 10C14.67 10 14 9.33 14 8.5C14 7.67 14.67 7 15.5 7Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiImageEditLine;
