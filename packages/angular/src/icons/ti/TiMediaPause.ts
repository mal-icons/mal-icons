import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-media-pause",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiMediaPause {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 6c-1.1 0-2 0.9-2 2v8c0 1.10.9 2 2 2s2-0.9 2-2v-8c0-1.1-0.9-2-2-2zM15 6c-1.1 0-2 0.9-2 2v8c0 1.10.9 2 2 2s2-0.9 2-2v-8c0-1.1-0.9-2-2-2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiMediaPause;
