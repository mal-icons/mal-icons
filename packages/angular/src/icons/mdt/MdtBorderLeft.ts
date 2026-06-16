import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-border-left",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtBorderLeft {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11 3h2v2h-2zM3 3h2v18H3zm12 0h2v2h-2zm-4 16h2v2h-2zm0-4h2v2h-2zm4 4h2v2h-2zM11 7h2v2h-2zm0 4h2v2h-2zm8 4h2v2h-2zm0 4h2v2h-2zm0-12h2v2h-2zm0 4h2v2h-2zm0-8h2v2h-2zm-4 8h2v2h-2zm-8 8h2v2H7zm0-8h2v2H7zm0-8h2v2H7z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtBorderLeft;
