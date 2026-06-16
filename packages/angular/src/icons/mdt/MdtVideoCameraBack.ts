import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-video-camera-back",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtVideoCameraBack {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 18h12V6H4v12zm3.38-5.17L9 15l2.62-3.5L15 16H5l2.38-3.17z","opacity":".3"}],["path",{"d":"M11.62 11.5 9 15l-1.62-2.17L5 16h10z"}],["path",{"d":"M18 10.48V6c0-1.1-0.9-2-2-2H4c-1.1 0-2 0.9-2 2v12c0 1.10.9 2 2 2h12c1.1 0 2-0.9 2-2v-4.48l4 3.98v-11l-4 3.98zM16 18H4V6h12v12z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtVideoCameraBack;
