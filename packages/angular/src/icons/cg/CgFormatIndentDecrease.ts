import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-format-indent-decrease",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgFormatIndentDecrease {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20 7H4V5H20V7Z","fill":"currentColor"}],["path",{"d":"M20 11H12V9H20V11Z","fill":"currentColor"}],["path",{"d":"M12 15H20V13H12V15Z","fill":"currentColor"}],["path",{"d":"M9 9L4 12L9 15V9Z","fill":"currentColor"}],["path",{"d":"M4 17V19H20V17H4Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgFormatIndentDecrease;
