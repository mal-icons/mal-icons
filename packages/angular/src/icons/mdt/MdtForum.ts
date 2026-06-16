import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-forum",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtForum {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15 11V4H4v8.17L5.17 11H6z","opacity":".3"}],["path",{"d":"M16 13c0.55 0 1-0.45 1-1V3c0-0.55-0.45-1-1-1H3c-0.55 0-1 0.45-1 1v14l4-4h10zm-12-0.83V4h11v7H5.17L4 12.17zM22 7c0-0.55-0.45-1-1-1h-2v9H6v2c0 0.550.45 1 1 1h11l4 4V7z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtForum;
