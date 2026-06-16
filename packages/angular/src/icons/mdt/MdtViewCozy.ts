import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-view-cozy",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtViewCozy {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 18h16V6H4v12zm8.75-10.75h4v4h-4v-4zm0 5.5h4v4h-4v-4zm-5.5-5.5h4v4h-4v-4zm0 5.5h4v4h-4v-4z","opacity":".3"}],["path",{"d":"M7.25 7.25h4v4h-4zm5.5 0h4v4h-4zm-5.5 5.5h4v4h-4zm5.5 0h4v4h-4z"}],["path",{"d":"M20 4H4c-1.1 0-2 0.9-2 2v12c0 1.10.9 2 2 2h16c1.1 0 2-0.9 2-2V6c0-1.1-0.9-2-2-2zm0 14H4V6h16v12z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtViewCozy;
