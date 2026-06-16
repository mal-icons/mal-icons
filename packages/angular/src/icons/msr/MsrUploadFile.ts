import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-upload-file",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrUploadFile {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M452-403v171q0 12.75 8.68 21.38 8.68 8.63 21.5 8.63 12.83 0 21.33-8.62T512-232v-171l61 61q3 3 15-2t22.5-9q10.5-4 14.5-3.5T615-342q9-9 8.5-21t-9.5-21L501-494q-5-5-10.13-7-5.13-2-11-2Q474-503 469-501q-5 2-10 7L347-382q-9 9-9 21t9 21.39Q356-331 368-331t21-9l63-63ZM220-80q-24 0-42-18t-18-42v-680q0-24 18-42t42-18h336q12.44 0 23.72 5T599-862l183 183q8 8 13 19.28 5 11.28 5 23.72v496q0 24-18 42t-42 18H220Zm331-584v-156H220v680h520v-494H581q-12.75 0-21.37-8.62T551-664ZM220-820v186-186 680-680Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrUploadFile;
