import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-googleforms",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiGoogleforms {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14.73 6h6l-6-6v6zm0 0.73H14V0H4.91c-0.9 0-1.640.73-1.64 1.64v20.73c0 0.90.73 1.64 1.64 1.64h14.18c0.9 0 1.64-0.73 1.64-1.64V6.73h-6zM7.91 17.32a0.820.82 0 1 1 0-1.640.820.82 0 0 1 0 1.64zm0-3.27a0.820.82 0 1 1 0-1.640.820.82 0 0 1 0 1.64zm0-3.27a0.820.82 0 1 1 0-1.640.820.82 0 0 1 0 1.64zm9 6.41h-6.82v-1.36h6.82v1.36zm0-3.27h-6.82v-1.36h6.82v1.36zm0-3.27h-6.82V9.27h6.82v1.36z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiGoogleforms;
