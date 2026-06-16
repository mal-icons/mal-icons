import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-web-stories",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtWebStories {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 4h9v16H4z","opacity":".3"}],["path",{"d":"M17 4v16c1.1 0 2-0.9 2-2V6c0-1.1-0.9-2-2-2zm-4-2H4c-1.1 0-2 0.9-2 2v16c0 1.10.9 2 2 2h9c1.1 0 2-0.9 2-2V4c0-1.1-0.9-2-2-2zm0 18H4V4h9v16zm8-14v12c0.83 0 1.5-0.67 1.5-1.5v-9c0-0.83-0.67-1.5-1.5-1.5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtWebStories;
