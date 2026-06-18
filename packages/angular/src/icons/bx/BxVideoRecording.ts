import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-video-recording",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxVideoRecording {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18 9c0-1.1-0.9-2-2-2h-1.43l-2.42-4.03A2.01 2.01 0 0 0 10.43 2H5v2h5.43l1.8 3H4c-1.1 0-2 0.9-2 2v9c0 1.10.9 2 2 2h12c1.1 0 2-0.9 2-2v-3l4 2v-7l-4 2V9zm-2 9H4V9h12l0 4H16v1l000 4z"}],["path",{"d":"M6 14h6v2H6z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxVideoRecording;
