import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-acute",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrAcute {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M600-160q-134 0-227-93t-93-227q0-134 93-227t227-93q134 0 227 93t93 227q0 134-93 227t-227 93Zm-0.23-60Q708-220 784-295.76q76-75.76 76-184Q860-588 784.24-664q-75.76-76-184-76Q492-740 416-664.23q-76 75.76-76 184Q340-372 415.77-296q75.76 76 184 76ZM631-493l-1-117q0-12-8.62-21T600-640q-12.75 0-21.37 8.5T570-610v130q0 5.57 2 10.78Q574-464 579-459l102 101q8.8 9 20.9 9 12.1 0 21.1-8.84 9-8.84 9-21T723-400l-92-93ZM110-610q-12.75 0-21.37-8.68Q80-627.35 80-640.17 80-653 88.63-661.5T110-670h100q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T210-610H110ZM70-450q-12.75 0-21.37-8.68Q40-467.35 40-480.17 40-493 48.63-501.5T70-510h140q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T210-450H70Zm40 160q-12.75 0-21.37-8.68Q80-307.35 80-320.17 80-333 88.63-341.5T110-350h100q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T210-290H110Zm490-190Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrAcute;
