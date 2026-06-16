import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-no-adult-content",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssNoAdultContent {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M480-80q-85 0-158-30.5T195-195q-54-54-84.5-127T80-480q0-84 30.5-157T195-764q54-54 127-85t158-31q84 0 157 31t127 85q54 54 85 127t31 157q0 85-31 158t-85 127q-54 54-127 84.5T480-80Zm0-60q62 0 117-21t100-59L557-360h85l98 98q38-45 59-100.5T820-480q0-140-100-240T480-820q-62 0-117.5 21T262-740l141 140h-85l-98-98q-38 45-59 100.5T140-480q0 140 100 240t240 100ZM210-405l56-75-56-75h48l32 43 33-43h47l-56 75 56 75h-47l-33-43-32 43h-48Zm190 0 56-75-56-75h48l32 43 33-43h47l-56 75 56 75h-47l-33-43-32 43h-48Zm190 0 56-75-56-75h48l32 43 33-43h47l-56 75 56 75h-47l-33-43-32 43h-48Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssNoAdultContent;
