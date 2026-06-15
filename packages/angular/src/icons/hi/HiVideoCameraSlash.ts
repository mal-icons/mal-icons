import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-hi-video-camera-slash",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class HiVideoCameraSlash {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"stroke-linecap":"round","stroke-linejoin":"round","d":"m15.75 10.5 4.72-4.72a0.750.75 0 0 1 1.280.53v11.38a0.750.75 0 0 1-1.280.53l-4.72-4.72M12 18.75H4.5a2.25 2.25 0 0 1-2.25-2.25V9m12.84 9.09L16.5 19.5m-1.41-1.41c0.41-0.410.66-0.970.66-1.59v-9a2.25 2.25 0 0 0-2.25-2.25h-9c-0.62 0-1.180.25-1.590.66m12.18 12.18L2.91 5.91M1.5 4.5l1.41 1.41"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":1.5};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default HiVideoCameraSlash;
