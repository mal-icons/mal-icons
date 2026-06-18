import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxs-playlist",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxsPlaylist {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13 16.49C13 18.43 14.57 20 16.51 20s3.51-1.57 3.51-3.51c0-0.18-0.03-0.35-0.05-0.52H20V6h2V4h-3a1 1 0 0 0-1 1v8.33a3.47 3.47 0 0 0-1.49-0.35A3.51 3.51 0 0 0 13 16.49zM2 5h14v2H2z"}],["path",{"d":"M2 9h14v2H2zm0 4h9v2H2zm0 4h9v2H2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxsPlaylist;
