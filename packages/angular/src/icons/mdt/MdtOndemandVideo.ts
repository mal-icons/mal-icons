import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-ondemand-video",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtOndemandVideo {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 17h18V5H3v12zM9 7l7 4-7 4V7z","opacity":".3"}],["path",{"d":"M9 7v8l7-4zm12-4H3c-1.1 0-2 0.9-2 2v12c0 1.10.9 2 2 2h5v2h8v-2h5c1.1 0 2-0.9 2-2V5c0-1.1-0.9-2-2-2zm0 14H3V5h18v12z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtOndemandVideo;
