import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-picture-in-picture",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrPictureInPicture {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18 7h-6c-0.55 0-1 0.45-1 1v4c0 0.550.45 1 1 1h6c0.55 0 1-0.45 1-1V8c0-0.55-0.45-1-1-1zm3-4H3c-1.1 0-2 0.9-2 2v14c0 1.10.9 1.98 2 1.98h18c1.1 0 2-0.88 2-1.98V5c0-1.1-0.9-2-2-2zm-1 16.01H4c-0.55 0-1-0.45-1-1V5.98c0-0.550.45-1 1-1h16c0.55 0 1 0.45 1 1v12.03c0 0.55-0.45 1-1 1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrPictureInPicture;
