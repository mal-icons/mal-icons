import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-media-pause-outline",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiMediaPauseOutline {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 20c-1.65 0-3-1.35-3-3v-9c0-1.65 1.35-3 3-3s3 1.35 3 3v9c0 1.65-1.35 3-3 3zm0-13c-0.55 0-1 0.45-1 1v9c0 0.550.45 1 1 1s1-0.45 1-1v-9c0-0.55-0.45-1-1-1zM15 20c-1.65 0-3-1.35-3-3v-9c0-1.65 1.35-3 3-3s3 1.35 3 3v9c0 1.65-1.35 3-3 3zm0-13c-0.55 0-1 0.45-1 1v9c0 0.550.45 1 1 1s1-0.45 1-1v-9c0-0.55-0.45-1-1-1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiMediaPauseOutline;
