import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-photo-album",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrPhotoAlbum {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18 2H6c-1.1 0-2 0.9-2 2v16c0 1.10.9 2 2 2h12c1.1 0 2-0.9 2-2V4c0-1.1-0.9-2-2-2zm-2.76 8.55L13.5 9.5l-1.74 1.05c-0.330.2-0.76-0.04-0.76-0.43V4h5v6.12a0.50.5 0 0 1-0.760.43zM7.6 17.2l1.38-1.83c0.2-0.270.6-0.270.8 0L11 17l2.23-2.97c0.2-0.270.6-0.270.8 0l2.38 3.17a0.50.5 0 0 1-0.40.8H8a0.50.5 0 0 1-0.4-0.8z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrPhotoAlbum;
