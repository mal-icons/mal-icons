import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-hdr-strong",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrHdrStrong {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M185-330q-61 0-103-42T40-475q0-62 42-103.5T185-620q62 0 103.5 41.5T330-475q0 61-41.5 103T185-330Zm0-60q39 0 62-23t23-62q0-39-23-62t-62-23q-39 0-62 23t-23 62q0 39 23 62t62 23Zm495 150q-99 0-169.5-70.5T440-480q0-99 70.5-169.5T680-720q99 0 169.5 70.5T920-480q0 99-70.5 169.5T680-240Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrHdrStrong;
