import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-camera",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiCamera {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19 6h-1.59l-1-1c-0.58-0.58-1.59-1-2.41-1h-4c-0.82 0-1.830.42-2.41 1l-1 1h-1.59c-1.65 0-3 1.35-3 3v8c0 1.65 1.35 3 3 3h14c1.65 0 3-1.35 3-3v-8c0-1.65-1.35-3-3-3zm-7 10c-1.93 0-3.5-1.57-3.5-3.5 0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5c0 1.93-1.57 3.5-3.5 3.5zm6-4.7c-0.72 0-1.3-0.58-1.3-1.3s0.58-1.3 1.3-1.3 1.30.58 1.3 1.3-0.58 1.3-1.3 1.3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiCamera;
