import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-extension-add",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgExtensionAdd {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16 4H18V6H20V8H18V10H16V8H14V6H16V4Z","fill":"currentColor"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M12 12V6H4V20H18V12H12ZM6 8H10V12H6V8ZM10 14V18H6V14H10ZM16 14V18H12V14H16Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgExtensionAdd;
