import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-library-music",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrLibraryMusic {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20 2H8c-1.1 0-2 0.9-2 2v12c0 1.10.9 2 2 2h12c1.1 0 2-0.9 2-2V4c0-1.1-0.9-2-2-2zm-3 5h-2v5.37c0 1.27-0.9 2.44-2.16 2.6a2.51 2.51 0 0 1-2.8-2.95c0.2-1.1 1.18-1.95 2.3-2.020.63-0.04 1.20.16 1.660.51V6c0-0.550.45-1 1-1h2c0.55 0 1 0.45 1 1s-0.45 1-1 1zM3 6c-0.55 0-1 0.45-1 1v13c0 1.10.9 2 2 2h13c0.55 0 1-0.45 1-1s-0.45-1-1-1H5c-0.55 0-1-0.45-1-1V7c0-0.55-0.45-1-1-1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrLibraryMusic;
